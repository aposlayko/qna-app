import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-new-page',
  templateUrl: './question-new-page.component.html',
  styleUrls: ['./question-new-page.component.scss']
})
export class QuestionNewPageComponent implements OnInit {

  constructor(
    private router: Router,
    private questionService: QuestionsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  updateQuestionHandler(question: Question) {
    console.log(question);
    delete question.id;
    question.categoryId = this.activatedRoute.snapshot.params['category_id']
    this.questionService.createQuestion(question).subscribe(() => {
      this.router.navigate([`../`], {relativeTo: this.activatedRoute});
    });
  }
}
