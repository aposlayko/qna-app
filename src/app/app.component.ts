import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import {Router} from '@angular/router';
import {map, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  pictureUrl$: Observable<string>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe(this.firebaseAuthChangeListener.bind(this));
    this.isLoggedIn$ = this.angularFireAuth.authState.pipe(map(user => !!user));
    this.pictureUrl$ = this.angularFireAuth.authState.pipe(map(user => user?.photoURL));
  }

  handleLogOut() {
    this.angularFireAuth.signOut();
  }

  private firebaseAuthChangeListener(response: firebase.User) {
    if (response) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
