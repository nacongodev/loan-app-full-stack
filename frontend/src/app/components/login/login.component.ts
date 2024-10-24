import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    this.authService.login(form.value).subscribe(
      response => {
        localStorage.setItem('token', response.token);
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
