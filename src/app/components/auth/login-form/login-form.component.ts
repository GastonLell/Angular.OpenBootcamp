import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // "eve.holt@reqres.in", "cityslicka"
  loginForm: FormGroup = new FormGroup({})
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
  // submit form login

  submitLogin(){
    if(this.loginForm.invalid) return;

    this.loginAction.emit(this.loginForm.value)

    // this.loginForm.reset()
  }
}
