import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles: Article[])=>{
      console.log(articles);
      this.articles = articles;
      console.log(articles);
    });
  }

  add() {
    this.router.navigate(['/article-add']);
  }
}