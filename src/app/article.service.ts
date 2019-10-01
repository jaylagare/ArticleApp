import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
	// API_URL: string = "api/";
	API_URL: string = "https://service.salusciens.com/";

	constructor(private httpClient: HttpClient) { }

	getArticles() {
		return this.httpClient.get(`${this.API_URL}articles`);
	}

	getArticle(articleId) {
		return this.httpClient.get(`${this.API_URL}articles/${articleId}`);
	}

	createArticle(article) {
		return this.httpClient.post(`${this.API_URL}articles/`, article);
	}

	updateArticle(article) {
		return this.httpClient.put(`${this.API_URL}articles/${article._id}`, article);
	}

	deleteArticle(articleId) {
		return this.httpClient.delete(`${this.API_URL}articles/${articleId}`);
	}
}