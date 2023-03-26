import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    const user = this.loginForm.value;

    this.authService.login(user).subscribe((res: any) => {
      console.log(res.payload.user);
      if (res.success) {
        this.userService.setCurrentUser(res.payload.user);
        this.route.navigate(['/home']);
        this.authService.setToken(res.payload.token);
        console.log(res);
      }
    });
  }
}
