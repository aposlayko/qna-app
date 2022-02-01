import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-search-by-text-page',
  templateUrl: './search-by-text-page.component.html',
  styleUrls: ['./search-by-text-page.component.scss']
})
export class SearchByTextPageComponent implements OnInit {
  questions$: Observable<Question[]>

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
  }

  handleSearch(searchText: string) {
    this.questions$ = this.questionsService.searchQuestionsByTitle(searchText);
  }
}
