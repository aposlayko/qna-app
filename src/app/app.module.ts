import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {QuestionPageComponent} from './components/question-page/question-page.component';
import { MarkupContainerComponent } from './components/markup-container/markup-container.component';
import {MatListModule} from '@angular/material/list';
import { QuestionEditPageComponent } from './components/question-edit-page/question-edit-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { QuestionNewPageComponent } from './components/question-new-page/question-new-page.component';

import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { CategoryListPageComponent } from './components/category-list-page/category-list-page.component';
import { AddCategoryDialogComponent } from './components/dialogs/add-category-dialog/add-category-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditCategoryDialogComponent } from './components/edit-category-dialog/edit-category-dialog.component';
import { SearchByTagsPageComponent } from './components/search-by-tags-page/search-by-tags-page.component';
import { SearchByTextPageComponent } from './components/search-by-text-page/search-by-text-page.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {MatCardModule} from '@angular/material/card';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from '@angular/common';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    }
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
    AppComponent,
    CategoryPageComponent,
    QuestionPageComponent,
    MarkupContainerComponent,
    QuestionEditPageComponent,
    QuestionEditorComponent,
    QuestionNewPageComponent,
    NotFoundPageComponent,
    CategoryListPageComponent,
    AddCategoryDialogComponent,
    EditCategoryDialogComponent,
    SearchByTagsPageComponent,
    SearchByTextPageComponent,
    QuestionListComponent,
    LoginPageComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
