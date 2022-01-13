import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import hljs from 'highlight.js';

@Component({
  selector: 'app-markup-container',
  templateUrl: './markup-container.component.html',
  styleUrls: ['./markup-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkupContainerComponent implements OnInit {
  @Input() rawText: string = '';

  html: SafeHtml = '';
  md: MarkdownIt = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
            '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + this.md.utils.escapeHtml(str) + '</code></pre>';
    }
  });

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const textWithMarkdown = this.md.render(this.rawText);
    this.html = this.sanitizer.bypassSecurityTrustHtml(textWithMarkdown);
  }

}
