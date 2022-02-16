import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../interfaces/category.interface';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  public questions: Question[];
  public category: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
    this.category = this.activatedRoute.snapshot.data['category'];
  }

  handleOpenQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}`]).then();
  }

  handleEditQuestion(question: Question) {
    this.router.navigate([`/category/${question.categoryId}/question/${question.id}/edit`]).then();
  }

  handleDeleteQuestion(question: Question) {
    this.questionService.deleteQuestion(question.id).subscribe(this.updateCategoryQuestions.bind(this));
  }

  handleSearchByTag(tag: string) {
    this.router.navigate([`search-by-tags`], {queryParams: {tags: tag}}).then();
  }

  private updateCategoryQuestions() {
    this.questionService.getQuestionByCategory(this.category.id).subscribe(questions => {
      this.questions = questions;
    })
  }
}
