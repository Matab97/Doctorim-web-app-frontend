import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorSignUpData } from '../../models/DoctorSignUpData';

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
    //console.log(signUpForm.value);
    if(!signUpForm.valid) {
      this.isFormInvalid = true;
      this.isPasswordconform = false;
      return;
    }

    this.isFormInvalid = false;
    this.checkPassword(signUpForm);
    //console.log(signUpForm.value);
  } 

  private checkPassword(signUpForm: NgForm) {
    if(!(signUpForm.value.password === signUpForm.value.passwordconfirmation)) {
      this.isPasswordconform = true;
    } else {
      this.isPasswordconform = false;
      const patient = new DoctorSignUpData(signUpForm.value.nom, 
        signUpForm.value.prenom,
        signUpForm.value.specialite,  
        signUpForm.value.tel,       
        'Doctor',
        signUpForm.value.password);
      
      console.log(patient);
    }

  }
  
}
