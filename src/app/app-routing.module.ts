import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {QuestionPageComponent} from './components/question-page/question-page.component';
import {QuestionPageResolver} from './resolvers/question-page/question-page.resolver';
import {QuestionEditPageComponent} from './components/question-edit-page/question-edit-page.component';
import {QuestionNewPageComponent} from './components/question-new-page/question-new-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {CategoryListPageComponent} from './components/category-list-page/category-list-page.component';
import {QuestionListResolver} from './resolvers/question-list/question-list.resolver';
import {CategoryResolver} from './resolvers/category/category.resolver';
import {SearchByTagsPageComponent} from './components/search-by-tags-page/search-by-tags-page.component';
import {SearchByTextPageComponent} from './components/search-by-text-page/search-by-text-page.component';

const routes: Routes = [{
  path: '',
  component: CategoryListPageComponent,
}, {
  path: 'category/:category_id',
  component: CategoryPageComponent,
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
  path: 'search-by-tags',
  component: SearchByTagsPageComponent
}, {
  path: 'search-by-text',
  component: SearchByTextPageComponent
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
