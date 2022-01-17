import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question';

@Component({
  selector: 'app-question-new-page',
  templateUrl: './question-new-page.component.html',
  styleUrls: ['./question-new-page.component.scss']
})
export class QuestionNewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateQuestionHandler(question: Question) {
    console.log(question);
  }
}
