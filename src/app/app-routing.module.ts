import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {QuestionPageComponent} from './components/question-page/question-page.component';
import {QuestionPageResolver} from './resolvers/question-page/question-page.resolver';
import {QuestionEditPageComponent} from './components/question-edit-page/question-edit-page.component';
import {QuestionNewPageComponent} from './components/question-new-page/question-new-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {QuestionListResolver} from './resolvers/question-list/question-list.resolver';
import {CategoryResolver} from './resolvers/category/category.resolver';

const routes: Routes = [{
  path: '',
  component: CategoryPageComponent,
}, {
  path: 'category/:category_id',
  component: QuestionListComponent,
  resolve: {
    questions: QuestionListResolver,
    category: CategoryResolver
  }
}, {
  path: 'category/:category_id/question/:id',
  component: QuestionPageComponent,
  resolve: {
    question: QuestionPageResolver
  },
}, {
  path: 'category/:category_id/question/:id/edit',
  component: QuestionEditPageComponent,
  resolve: {
    question: QuestionPageResolver
  }
}, {
  path: 'category/:category_id/new-question',
  component: QuestionNewPageComponent
}, {
  path: '404',
  component: NotFoundPageComponent
},
  {
  path: '**',
  redirectTo: '404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
