import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {MatDialog} from '@angular/material/dialog';
import {EditCategoryDialogComponent} from '../edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionsService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
  }

  editCategoryHandler() {
    this.dialog.open(EditCategoryDialogComponent)
      .afterClosed()
      .subscribe(name => {
        if (name) {
          this.questionService.editCategory(
            this.activatedRoute.snapshot.params['category_id'],
            name
          ).subscribe();
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
