import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, mergeMap, Observable, of, take} from 'rxjs';
import {Category} from '../../interfaces/category.interface';
import {QuestionsService} from '../../services/questions.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {
  constructor(
    private questionsService: QuestionsService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Category> {
    const questionId = route.paramMap.get('category_id') || '';

    return this.questionsService.getCategoryById(questionId).pipe(
      take(1),
      mergeMap(category => {
        if (category) {
          return of(category);
        } else { // question not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }
}
