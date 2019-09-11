import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article";
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})

export class ArticleEditComponent implements OnInit {
	article: Article = new Article();
	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private articleService: ArticleService, private router: Router, private route: ActivatedRoute) {
		var id = this.route.snapshot.params.id;	
		this.articleService.getArticle(id).subscribe((article: Article) =>{
			this.article = article;

			// this.form = this.createFormGroup();
			// this.form = this.createFormGroupWithBuilder(formBuilder);
			this.form = this.createFormGroupWithBuilderAndModel(this.formBuilder);
		})
	}

	ngOnInit() {

		// this.route.paramMap.subscribe(params => {
		// 	this.articleService.getArticles().forEach((article: Article) => {
		// 		if (article.id == params.id) {
		// 			this.article = article;
		// 		}
		// 	});
		// });

		// this.articleService.getArticles().forEach((article: Article) => {
		// 	if (p.id == this.route.snapshot.params.id) {
		// 		this.article = article;
		// 	}
		// });
	}

	// method 1
	createFormGroup() {
		return new FormGroup({
			title: new FormControl(),
			image: new FormControl(),
			description: new FormControl(),
			publishDate: new FormControl(),
			// description: new FormControl()
		});
	}

	// method 2
	createFormGroupWithBuilder(formBuilder: FormBuilder) {
		return formBuilder.group({
			name: this.article.title,
			image: this.article.image,
			description: this.article.description,
			publishDate: this.article.description,
		});
	}	

	// method 3
	createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
	    return formBuilder.group(this.article);
	}

	onSubmit() {
		// Make sure to create a deep copy of the form-model if nested
		this.article = Object.assign({}, this.form.value);

		this.articleService.updateArticle(this.article).subscribe(
			data  => {
				console.log("Update article request is successful ", data);
				this.router.navigate(['/articles']);
				// this.router.navigate(['/article/'+this.article.id]);
			},
			error  => {
				console.log("Error", error);
			}
		);

	}	

	cancel() {
		this.router.navigate(['/articles/'+this.article._id]);
	}

	delete() {
		this.articleService.deleteArticle(this.article._id).subscribe(
			data  => {
				console.log("Delete article request is successful ", data);
				this.router.navigate(['/articles']);
				// this.router.navigate(['/article/'+this.article.id]);
			},
			error  => {
				console.log("Error", error);
			}
		);
	}	
}