import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-patientregister',
  templateUrl: './patientregister.component.html',
  styleUrls: ['./patientregister.component.css']
})



export class PatientregisterComponent implements OnInit {

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
