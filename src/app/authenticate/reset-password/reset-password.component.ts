import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  sendResetLink() {
    if (this.resetForm.valid) {
      this.authService.ForgotPassword(this.resetForm.value.email);
    }
  }
}
