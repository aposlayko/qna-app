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

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionPageComponent,
    MarkupContainerComponent,
    QuestionEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
