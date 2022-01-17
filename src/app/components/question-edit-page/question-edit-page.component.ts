import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../interfaces/question';

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.scss']
})
export class QuestionEditPageComponent implements OnInit {
  question: Question;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
  }

  handleUpdateQuestion(question: Question) {
    console.log(question);
  }
}
