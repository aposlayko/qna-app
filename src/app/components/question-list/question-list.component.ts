import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  public questions$: Observable<Question[]>;

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions$ = this.questionService.getQuestions();
  }
}
