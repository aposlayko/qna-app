import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Question} from '../../interfaces/question';
import {debounceTime, fromEvent, map} from 'rxjs';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('textArea') textAreaElement: ElementRef;

  @Input() question?: Question;

  @Output() updateQuestion = new EventEmitter<Question>();

  updatedQuestion: Question = {
    id: 10,
    answer: '',
    title: '',
    categoryId: 1
  }

  constructor() { }

  ngOnInit(): void {
    if (this.question) {
      this.updatedQuestion = {
        ...this.question
      }
    }
  }

  ngAfterViewInit() {
    fromEvent<KeyboardEvent>(this.textAreaElement.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => {
          return (<HTMLTextAreaElement>event.target).value;
        }),
        debounceTime(400)
      ).subscribe(value => {
      this.updatedQuestion.answer = value;
      this.updateQuestion.emit(this.updatedQuestion);
    });
  }
}