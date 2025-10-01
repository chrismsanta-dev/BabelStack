import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { registerUser } from '../../core/store/user/user.actions';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  protected form: FormGroup;

  constructor(private readonly store: Store) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  protected register(): void {
    const password = this.form.value['password'];
    const confirmPassword = this.form.value['confirmPassword'];
    if (!password || !confirmPassword || confirmPassword !== password) return;

    const username = this.form.value['username'];
    const email = this.form.value['email'];
    this.store.dispatch(registerUser({ username, email, password }));
  }
}
