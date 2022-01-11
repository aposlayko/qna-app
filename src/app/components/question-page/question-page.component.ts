import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../interfaces/question';
import * as MarkdownIt from 'markdown-it';
import {debounceTime, fromEvent, map} from "rxjs";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, AfterViewInit {
  @ViewChild('textAreaElement')
  textAreaElement: ElementRef<HTMLTextAreaElement>;

  question: Question;
  md = MarkdownIt();
  textWithMarkdown: SafeHtml = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
    console.log(this.md.render('# markdown-it rulezz!'));


  }

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.textAreaElement.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => {
          return (<HTMLTextAreaElement>event.target).value;
        }),
        debounceTime(400)
      ).subscribe(value => {
      console.log(value);
      this.textWithMarkdown = this.sanitizer.bypassSecurityTrustHtml(this.md.render(value));
    });
  }
}
