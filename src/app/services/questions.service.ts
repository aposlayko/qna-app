import { Injectable } from '@angular/core';
import {first, from, map, Observable} from 'rxjs';
import {NewQuestion, Question} from '../interfaces/question.interface';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {convertDocSnap, convertSnaps} from '../utils/db-utils';
import {Category, NewCategory} from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private db: AngularFirestore) {}

  getQuestions(): Observable<Question[]> {
    return this.db.collection<Question>('questions').snapshotChanges()
      .pipe(
        map(convertSnaps),
        first()
      );
  }

  getQuestionById(id: string): Observable<Question> {
    return this.db.doc<Question>(`questions/${id}`).snapshotChanges()
      .pipe(
        map(convertDocSnap),
        first()
      );
  }

  getQuestionByCategory(id: string): Observable<Question[]> {
    return this.db.collection<Question>(
      'questions',
      ref => ref.where('categoryId', '==', id)
    ).snapshotChanges()
      .pipe(
        map(convertSnaps),
        first()
      );
  }

  getQuestionsByTagNames(tags: string[]): Observable<Question[]> {
    return this.db.collection<Question>(
      'questions',
      ref => {
        let updRef;
        tags.forEach(tag => updRef = ref.where(`tags.${tag}`, '==', true));
        return updRef;
      }
    ).snapshotChanges()
      .pipe(
        map(convertSnaps),
        first()
      );
  }

  createQuestion(question: NewQuestion): Observable<any> {
    return from(this.db.collection('questions').add(question));
  }

  patchQuestion(id: string, question: Partial<NewQuestion>): Observable<void> {
    return from(this.db.collection('questions').doc(id).update(question));
  }

  deleteQuestion(id: string): Observable<void> {
    return from(this.db.collection('questions').doc(id).delete());
  }

  getCategories(): Observable<Category[]> {
    return this.db.collection<Category>('category').snapshotChanges()
      .pipe(
        map(convertSnaps),
        first()
      );
  }

  createCategory(category: NewCategory): Observable<any> {
    return from(this.db.collection('category').add(category));
  }
}
