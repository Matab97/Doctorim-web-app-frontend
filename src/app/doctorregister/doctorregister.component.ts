import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  isFormInvalid = false;
  isPasswordconform = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    console.log(signUpForm.value);
    if(!signUpForm.valid) {
      this.isFormInvalid = true;
      this.isPasswordconform = false;
      return;
    }
    this.checkPassword(signUpForm);
  } 

  private checkPassword(signUpForm: NgForm) {
    if(!(signUpForm.value.password === signUpForm.value.passwordconfirmation)) {
      this.isPasswordconform = true;
      this.isFormInvalid = false;
    }
  }
  
}
