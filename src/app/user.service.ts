import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
	// API_URL: string = "api/";
	API_URL: string = "https://service.salusciens.com/";

	constructor(private httpClient: HttpClient) { }

	getUsers() {
		return this.httpClient.get(`${this.API_URL}users`);
	}

	getUser(userId) {
		return this.httpClient.get(`${this.API_URL}users/${userId}`);
	}

	createUser(user) {
		return this.httpClient.post(`${this.API_URL}users/`, user);
	}

	updateUser(user) {
		return this.httpClient.put(`${this.API_URL}users/${user._id}`, user);
	}

	deleteUser(userId) {
		return this.httpClient.delete(`${this.API_URL}users/${userId}`);
	}
}
