import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCategoryDialogComponent} from '../add-category-dialog/add-category-dialog.component';
import {QuestionsService} from '../../services/questions.service';
import {Category} from '../../interfaces/category.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categories$: Observable<Category[]>

  constructor(
    private dialog: MatDialog,
    private questionService: QuestionsService
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
      .subscribe(name => {
      if (name) {
        console.log(name);
        this.questionService.createCategory({name}).subscribe(() => {
          this.fetchCategories();
        });
      }
    });
  }
}
