import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-by-text-page',
  templateUrl: './search-by-text-page.component.html',
  styleUrls: ['./search-by-text-page.component.scss']
})
export class SearchByTextPageComponent implements OnInit {
  questions$: Observable<Question[]>;
  searchedText: string;

  constructor(
    private questionsService: QuestionsService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

  handleSearch(searchText: string) {
    this.searchedText = searchText;
    this.questions$ = this.questionsService.searchQuestionsByTitle(searchText);
  }

  handleOpenQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}`]).then();
  }

  handleEditQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}/edit`]).then();
  }

  handleDeleteQuestion(question: Question) {
    this.questionsService.deleteQuestion(question.id).subscribe(this.handleSearch.bind(this, this.searchedText));
  }

  handleSearchByTag(tag: string) {
    this.router.navigate([`search-by-tags`], {queryParams: {tags: tag}}).then();
  }
}
