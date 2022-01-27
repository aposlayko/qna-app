import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
  }

  deleteCategoryHandler() {
    const categoryId = this.activatedRoute.snapshot.params['category_id'];
    this.questionService.deleteQuestionsByCategory(categoryId).subscribe(() => {
      console.log('bip');
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    });
  }
}
