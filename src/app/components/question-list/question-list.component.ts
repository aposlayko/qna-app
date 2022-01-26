import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questions: Question[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
  }
}
