import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../edit-category-dialog/edit-category-dialog.component';
import {Category} from '../../interfaces/category.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
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
    this.dialog.open(EditCategoryDialogComponent)
      .afterClosed()
      .subscribe(name => {
        if (name) {
          this.questionService.editCategory(
            this.activatedRoute.snapshot.params['category_id'],
            name
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
