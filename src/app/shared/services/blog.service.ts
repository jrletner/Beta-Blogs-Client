import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:3000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  fetchBlogs() {
    return this.http.get(`${URL}/blogs/home`);
  }

  fetchBlog(id: number) {
    return this.http.get(`${URL}/blogs/${id}`);
  }
}
