import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-question-edit-page',
  templateUrl: './question-edit-page.component.html',
  styleUrls: ['./question-edit-page.component.scss']
})
export class QuestionEditPageComponent implements OnInit {
  question: Question;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
  }

  handleUpdateQuestion(question: Question) {
    const id = question.id;
    delete question.id;

    this.questionService.patchQuestion(id, question).subscribe(() => {
      this.router.navigate([`../`], {relativeTo: this.activatedRoute});
    });
  }
}
