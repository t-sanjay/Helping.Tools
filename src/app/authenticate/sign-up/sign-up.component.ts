import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/services/user';

@Component({
selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
signupForm: FormGroup;
constructor(private authService: AuthService, private fb: FormBuilder) {}
ngOnInit(): void {
  this.createSignUpForm();
}
private createSignUpForm() {
  this.signupForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    confirmPassword: this.fb.control('', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
    displayName: this.fb.control('', Validators.required),
  });
}

signup() {
    if (this.signupForm.valid) {
      this.authService.SignUp(
        this.signupForm.value.email,
        this.signupForm.value.password
      );
      console.log(this.signupForm.value);
    } else{
      console.error('invalid data');
    }
  }
}
