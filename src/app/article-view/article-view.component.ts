import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})

export class ArticleViewComponent implements OnInit {
  article: Article = new Article();

  constructor(private articleService: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
	var id = this.route.snapshot.params.id;	
    this.articleService.getArticle(id).subscribe((article: Article) =>{
      this.article = article;
    });

	// this.route.paramMap.subscribe(params => {
	// 	this.articleService.getArticles().forEach((p: Article) => {
	// 		if (article._id == params.id) {
	// 			this.article = article;
	// 		}
	// 	});
	// });

	// this.articleService.getArticles().forEach((article: Article) => {
	// 	if (article._id == this.route.snapshot.params.id) {
	// 		this.article = article;
	// 	}
	// });
  }

	back() {
		this.router.navigate(['/articles/']);
	}

	edit() {
		this.router.navigate(['/article-edit/'+this.article._id]);
	}
}