import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, mergeMap, Observable, of, take} from 'rxjs';
import {Question} from '../../interfaces/question.interface';
import {QuestionsService} from '../../services/questions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionListResolver implements Resolve<Question[]> {
  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
    const categoryId = route.paramMap.get('category_id') || '';

    return this.questionsService.getQuestionByCategory(categoryId).pipe(
      take(1),
      mergeMap(questions => {
        if (questions) {
          return of(questions);
        } else { // question not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
