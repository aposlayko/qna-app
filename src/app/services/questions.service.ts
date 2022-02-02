import { Injectable } from '@angular/core';
import {first, from, map, Observable, switchMap} from 'rxjs';
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

  searchQuestionsByTitle(text: string): Observable<Question[]> {
    return this.db.collection<Question>(
      'questions',
      ref => {
        return ref.where(`title`, '>=', text)
          .where(`title`, '<=', text + '\uf8ff');
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

  deleteQuestionsByCategory(categoryId: string): Observable<void> {
    return from(this.db.firestore.runTransaction(async transaction => {
      const categoryRef = this.db.collection('category').doc(categoryId).ref;
      const querySnapshot = await this.db.firestore.collection('questions')
        .where('categoryId', '==', categoryId).get();

      querySnapshot.docs.map(doc =>{
        transaction.delete(doc.ref);
      });
      transaction.delete(categoryRef);
    }));
  }

  getCategories(): Observable<Category[]> {
    return this.db.collection<Category>('category').snapshotChanges()
      .pipe(
        map(convertSnaps),
        first()
      );
  }

  getCategoryById(id: string): Observable<Category> {
    return this.db.doc<Category>(`category/${id}`).snapshotChanges()
      .pipe(
        map(convertDocSnap),
        first()
      );
  }

  createCategory(category: NewCategory): Observable<any> {
    return from(this.db.collection<NewCategory>('category').add(category));
  }

  editCategory(id: string, name: string): Observable<any> {
    return from(this.db.collection<Category>('category').doc(id).update({name}));
  }
}
