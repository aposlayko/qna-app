import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCategoryDialogComponent} from '../dialogs/add-category-dialog/add-category-dialog.component';
import {QuestionsService} from '../../services/questions.service';
import {Category} from '../../interfaces/category.interface';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {EditCategoryDialogComponent} from '../edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-category-list-page',
  templateUrl: './category-list-page.component.html',
  styleUrls: ['./category-list-page.component.scss']
})
export class CategoryListPageComponent implements OnInit {
  categories$: Observable<Category[]>

  constructor(
    private dialog: MatDialog,
    private questionService: QuestionsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categories$ = this.questionService.getCategories();
  }

  createCategoryHandler() {
    this.dialog.open(AddCategoryDialogComponent)
      .afterClosed()
      .subscribe(category => {
      if (category) {
        this.questionService.createCategory(category).subscribe(() => {
          this.fetchCategories();
        });
      }
    });
  }

  navigateToCategoryPage(categoryId: string) {
    this.router.navigate([`category/${categoryId}`]);
  }

  handleDeleteCategoryClick(category: Category) {

    this.questionService.deleteQuestionsByCategory(category.id)
      .subscribe(this.fetchCategories.bind(this));
  }

  handleEditCategoryClick(category: Category) {
    this.dialog.open(
      EditCategoryDialogComponent,
      {
        width: '400px',
        data: category
      }
    )
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.questionService.editCategory(
            category.id,
            result.name,
            result.imgUrl
          ).subscribe(this.fetchCategories.bind(this));
        }
      });
  }
}
