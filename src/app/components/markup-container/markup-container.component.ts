import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-markup-container',
  templateUrl: './markup-container.component.html',
  styleUrls: ['./markup-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkupContainerComponent implements OnInit {
  @Input() rawText: string = '';

  html: SafeHtml = '';
  md = MarkdownIt();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const textWithMarkdown = this.md.render(this.rawText);
    this.html = this.sanitizer.bypassSecurityTrustHtml(textWithMarkdown);
  }

}
