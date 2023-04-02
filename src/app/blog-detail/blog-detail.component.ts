import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: any = null;
  categories: any = null;
  creator: any = null;

  constructor(
    private activedRoute: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      console.log(params);
      const blogId = params.id;
      this.blogService.fetchBlog(blogId).subscribe({
        next: (res: any) => {
          this.blog = res.payload.blog;
          this.categories = res.payload.blog.categories;
          this.creator = res.payload.blog.user;
        },
      });
    });
  }
}
