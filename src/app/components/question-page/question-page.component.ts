import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  question: Question;
  tags: string[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
    this.tags = Object.keys(this.question.tags);
  }

  deleteQuestionHandler() {
    this.questionService.deleteQuestion(this.question.id).subscribe(() => {
      this.router.navigate(['../../'], {relativeTo: this.activatedRoute});
    })
  }

  handleTagClick(tag: string): void {
    this.router.navigate([`search-by-tags`], {queryParams: {tags: tag}});
  }
}
