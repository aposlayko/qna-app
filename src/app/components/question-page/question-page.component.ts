import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('QuestionPageComponent');
  }

  ngOnInit(): void {
    console.log(this.activatedRoute);
  }

}
