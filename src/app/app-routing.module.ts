import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from "./article-list/article-list.component";
import { ArticleViewComponent } from "./article-view/article-view.component";  
import { ArticleAddComponent } from "./article-add/article-add.component";  
import { ArticleEditComponent } from "./article-edit/article-edit.component";  

const routes: Routes = [
	{path: '',  redirectTo: '/articles', pathMatch: 'full' },
	{path: 'articles' , component: ArticleListComponent},
	{path: 'articles/:id' , component: ArticleViewComponent},
	{path: 'article-add' , component: ArticleAddComponent},
	{path: 'article-edit/:id' , component: ArticleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
