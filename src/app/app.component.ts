import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  pictureUrl$: Observable<string>;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.pictureUrl$ = this.authService.pictureUrl$;
  }

  handleLogOut() {
    this.authService.logOut();
  }


}
