import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-by-tags-page',
  templateUrl: './search-by-tags-page.component.html',
  styleUrls: ['./search-by-tags-page.component.scss']
})
export class SearchByTagsPageComponent implements OnInit {
  questions$: Observable<Question[]>;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags = new Set([]);

  constructor(
    private questionsService: QuestionsService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const queryParamTags = this.activeRoute.snapshot.queryParams['tags'];
    if (queryParamTags) {
      queryParamTags.split(',').forEach((tag: string) => this.tags.add(tag));
      this.handleSearch();
    }
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.add(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeTag(tag: string): void {
    if (this.tags.has(tag)) {
      this.tags.delete(tag);
    }
  }

  handleSearch() {
    this.questions$ = this.questionsService.getQuestionsByTagNames(Array.from(this.tags));
  }

  handleOpenQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}`]).then();
  }

  handleEditQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}/edit`]).then();
  }

  handleDeleteQuestion(question: Question) {
    this.questionsService.deleteQuestion(question.id).subscribe(this.handleSearch.bind(this));
  }

  handleSearchByTag(tag: string) {
    this.router.navigate([`search-by-tags`], {queryParams: {tags: tag}}).then();
  }
}
