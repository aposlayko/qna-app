import { Injectable } from '@angular/core';
import {first, map, Observable} from 'rxjs';
import {Question} from '../interfaces/question';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {convertDocSnap, convertSnaps} from '../utils/db-utils';

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
}
