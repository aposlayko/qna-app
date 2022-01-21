import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-question-new-page',
  templateUrl: './question-new-page.component.html',
  styleUrls: ['./question-new-page.component.scss']
})
export class QuestionNewPageComponent implements OnInit {

  constructor(public questionService: QuestionsService) { }

  ngOnInit(): void {
  }

  updateQuestionHandler(question: Question) {
    console.log(question);
    this.questionService.createQuestion(question).subscribe(data => console.log(data));
  }
}
