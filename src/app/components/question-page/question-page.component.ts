import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../../interfaces/question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit, AfterViewInit {
  @ViewChild('textAreaElement')
  textAreaElement: ElementRef<HTMLTextAreaElement>;
  question: Question;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.question = this.activatedRoute.snapshot.data['question'];
  }

  ngAfterViewInit(): void {
    /*fromEvent<KeyboardEvent>(this.textAreaElement.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => {
          return (<HTMLTextAreaElement>event.target).value;
        }),
        debounceTime(400)
      ).subscribe(value => {
      console.log(value);
      this.textWithMarkdown = this.sanitizer.bypassSecurityTrustHtml(this.md.render(value));
    });*/
  }
}
