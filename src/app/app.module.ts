import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {QuestionListComponent} from './components/question-list/question-list.component';
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
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { AddCategoryDialogComponent } from './components/add-category-dialog/add-category-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionPageComponent,
    MarkupContainerComponent,
    QuestionEditPageComponent,
    QuestionEditorComponent,
    QuestionNewPageComponent,
    NotFoundPageComponent,
    CategoryPageComponent,
    AddCategoryDialogComponent
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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
