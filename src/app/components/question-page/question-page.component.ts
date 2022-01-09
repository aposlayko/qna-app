import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../interfaces/question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  question: Question;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
  }

}
