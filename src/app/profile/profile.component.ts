import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileBlogs: any = null;
  profileUser: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const username = params.username;
      console.log('username: ', username);
      this.http
        .get(`http://localhost:3000/api/v1/users/deneen_wilkinson`)
        .subscribe({
          next: (res: any) => {
            console.log('RESPONSE: ', res);
            this.profileUser = res.payload.user;
            this.profileBlogs = res.payload.user.blogs;
          },
        });
    });
  }
}
