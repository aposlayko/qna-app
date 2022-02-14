import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../edit-category-dialog/edit-category-dialog.component';
import {Category} from '../../interfaces/category.interface';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  public questions: Question[];
  public category: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionsService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
    this.category = this.activatedRoute.snapshot.data['category'];
  }

  getCurrentCategory() {
    this.questionService.getCategoryById(
      this.activatedRoute.snapshot.params['category_id']
    ).subscribe(category => this.category = category);
  }

  editCategoryHandler() {
    this.dialog.open(
      EditCategoryDialogComponent,
      {
        width: '400px',
        data: this.category
      }
    )
      .afterClosed()
      .subscribe(category => {
        if (category) {
          this.questionService.editCategory(
            this.activatedRoute.snapshot.params['category_id'],
            category.name,
            category.imgUrl
          ).subscribe(this.getCurrentCategory.bind(this));
        }
      });
  }

  deleteCategoryHandler() {
    const categoryId = this.activatedRoute.snapshot.params['category_id'];
    this.questionService.deleteQuestionsByCategory(categoryId).subscribe(() => {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    });
  }
}
