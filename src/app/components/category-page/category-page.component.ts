import { Component, OnInit } from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../interfaces/category.interface';

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
  ) { }

  ngOnInit(): void {
    this.questions = this.activatedRoute.snapshot.data['questions'];
    this.category = this.activatedRoute.snapshot.data['category'];
  }
}
