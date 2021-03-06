import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, mergeMap, Observable, of, take} from 'rxjs';
import {QuestionsService} from '../../services/questions.service';
import {Question} from '../../interfaces/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionPageResolver implements Resolve<Question> {
  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question> {
    const questionId = route.paramMap.get('id') || '';

    return this.questionsService.getQuestionById(questionId).pipe(
      take(1),
      mergeMap(question => {
        if (question) {
          return of(question);
        } else { // question not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
