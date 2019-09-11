import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article";
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})

export class ArticleAddComponent implements OnInit {
	article: Article = new Article();
	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private articleService: ArticleService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.form = this.createFormGroupWithBuilderAndModel(this.formBuilder);
	}

	// method 1
	createFormGroup() {
		return new FormGroup({
			title: new FormControl(),
			image: new FormControl(),
			description: new FormControl(),
			publishDate: new FormControl(),
		});
	}

	// method 2
	createFormGroupWithBuilder(formBuilder: FormBuilder) {
		return formBuilder.group({
			title: this.article.title,
			image: this.article.image,
			description: this.article.description,
			publishDate: this.article.publishDate,
		});
	}	

	// method 3
	createFormGroupWithBuilderAndModel(formBuilder: FormBuilder) {
	    return formBuilder.group(this.article);
	}

	cancel() {
		this.router.navigate(['/articles']);
	}

	onSubmit() {
		// Make sure to create a deep copy of the form-model if nested
		this.article = Object.assign({}, this.form.value);

		this.articleService.createArticle(this.article).subscribe(
			data  => {
				console.log("Create article request is successful ", data);
				this.router.navigate(['/articles']);
				// this.router.navigate(['/article/'+this.article.id]);
			},
			error  => {
				console.log("Error", error);
			}
		);
	}	
}