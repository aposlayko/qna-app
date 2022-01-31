import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];

  constructor() { }

  ngOnInit(): void {
  }

}
