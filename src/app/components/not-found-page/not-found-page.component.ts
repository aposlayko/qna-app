import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../services/questions.service';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questionService.getQuestionsByTagNames(['angular', 'pro']).subscribe(data => console.log(data));
  }

}
