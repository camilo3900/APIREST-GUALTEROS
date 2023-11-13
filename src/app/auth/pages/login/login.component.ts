import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 loginForm: FormGroup;

  constructor(  private authService: AuthService,
    private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*\d)(?=.*[.]).{9,15}$')]]
    });
  }

/*   login(): void{
    this.authService.login(this.loginForm.getRawValue());
  } */

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      
      console.log(this.loginForm.valid);
      this.authService.login(this.loginForm.getRawValue());
       
    }
  }
}
