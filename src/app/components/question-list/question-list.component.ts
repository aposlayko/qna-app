import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../interfaces/question.interface';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Input() questions: Question[];

  @Output() openQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() editQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();
  @Output() searchByTag: EventEmitter<string> = new EventEmitter<string>();

  objectKeys = Object.keys

  constructor() { }

  ngOnInit(): void {
  }

  handleTagClick(tag: string) {
    this.searchByTag.emit(tag);
  }

  handleOpenClick(question: Question) {
    this.openQuestion.emit(question);
  }

  handleEditClick(question: Question) {
    this.editQuestion.emit(question);
  }

  handleDeleteClick(question: Question) {
    this.deleteQuestion.emit(question);
  }
}
