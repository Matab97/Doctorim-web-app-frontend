import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {AuthenticationService} from '../service/authentication/authentication.service';
import { SignInData } from '../model/signinData'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signinForm: NgForm) {
    if(!signinForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signinForm);
  }

  private checkCredentials(signinForm: NgForm) {
    const signInData = new SignInData(signinForm.value.email, signinForm.value.password);
    if(!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
