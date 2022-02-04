import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {map, Observable} from 'rxjs';
import {Router} from '@angular/router';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  isLoggedIn$: Observable<boolean>;
  pictureUrl$: Observable<string>;
  userId: string;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user$ = this.angularFireAuth.authState;
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.pictureUrl$ = this.user$.pipe(map(user => user?.photoURL));
    this.user$.subscribe(this.firebaseAuthChangeListener.bind(this));
  }

  logOut(): void {
    this.angularFireAuth.signOut();
  }

  private firebaseAuthChangeListener(user: firebase.User) {
    if (user) {
      this.userId = user.uid;
      this.router.navigate(['/']);
    } else {
      this.userId = null;
      this.router.navigate(['login']);
    }
  }
}
