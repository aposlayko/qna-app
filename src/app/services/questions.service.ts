import { Injectable } from '@angular/core';
import {BehaviorSubject, delay, filter, map, Observable, of} from 'rxjs';
import {Question} from '../interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private _questions$ = new BehaviorSubject<Question[]>([]);

  constructor() { }

  fetchQuestions(): void {
    of([{
      id: 1,
      title: 'Whats up?',
      answer: 'It\'s OK',
      categoryId: 1
    }, {
      id: 2,
      title: 'What\'s your name?',
      answer: 'John Smith',
      categoryId: 1
    }]).pipe(delay(1000)).subscribe(data => this._questions$.next(data));
  }

  getQuestionsAsync(): Observable<Question[]> {
    return this._questions$.asObservable();
  }

  getQuestionById(id: number): Observable<Question> {
    return this.getQuestionsAsync().pipe(
      filter(questions => Boolean(questions&& !!questions.length)),
      map(questions => questions.filter(q => q.id === id)[0])
    );
  }
}
