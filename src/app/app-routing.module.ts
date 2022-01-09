import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {QuestionPageComponent} from './components/question-page/question-page.component';
import {QuestionPageResolver} from './resolvers/question-page/question-page.resolver';

const routes: Routes = [{
  path: '',
  component: QuestionListComponent,
  children: [{
    path: 'question/:id',
    component: QuestionPageComponent,
    resolve: {
      question: QuestionPageResolver
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
