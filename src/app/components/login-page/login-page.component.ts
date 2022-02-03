import { Component, OnInit } from '@angular/core';
import 'firebase/compat/auth';
import {FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult} from 'firebaseui-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  ngOnInit() {
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log('signInSuccessData', signInSuccessData.authResult);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log('errorData', errorData.code);
  }

  uiShownCallback() {
    console.log('auth-ui showed');
  }
}
