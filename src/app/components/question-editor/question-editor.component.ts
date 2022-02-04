import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Question} from '../../interfaces/question.interface';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {
  @ViewChild('textArea') textAreaElement: ElementRef;

  @Input() question?: Question;

  @Output() updateQuestion = new EventEmitter<Question>();

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags = new Set([]);

  updatedQuestion: Question = {
    id: '',
    title: '',
    answer: '',
    categoryId: '-1',
    tags: {},
    userId: null
  };

  questionForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    if (this.question) {
      this.updatedQuestion = {
        ...this.question
      }
    }

    this.questionForm = new FormGroup({
      titleInput: new FormControl(this.updatedQuestion.title, Validators.required),
      answerInput: new FormControl(this.updatedQuestion.answer, Validators.required),
      tagsInput: new FormControl(this.tags),
      categoryInput: new FormControl(this.updatedQuestion.categoryId , Validators.required)
    });

    this.tags = new Set(Object.keys(this.updatedQuestion.tags));
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

  saveQuestionHandler() {
    const result = this.questionForm.value;
    const resultTags: {[key: string]: boolean} = {};

    this.tags.forEach((o, t) => {
      resultTags[o] = true;
    });

    this.updatedQuestion = {
      ...this.updatedQuestion,
      title: result.titleInput,
      answer: result.answerInput,
      tags: resultTags,
    }
    this.updateQuestion.emit(this.updatedQuestion);
  }
}
