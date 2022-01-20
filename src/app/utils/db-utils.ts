import {Action, DocumentChangeAction, DocumentSnapshot} from '@angular/fire/compat/firestore/interfaces';

export function convertSnaps<T>(snaps: DocumentChangeAction<T>[]) {
  return <T[]>snaps.map(convertSnap);
}

export function convertSnap<T>(snap: DocumentChangeAction<T>) {
  return {
    id: snap.payload.doc.id,
    ...snap.payload.doc.data()
  };
}

export function convertDocSnap<T>(docSnap: Action<DocumentSnapshot<T>>) {
  return {
    ...docSnap.payload.data(),
    id: docSnap.payload.id
  }
}
