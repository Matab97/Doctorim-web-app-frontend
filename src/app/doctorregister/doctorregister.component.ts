import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(signUpForm: NgForm) {
    console.log(signUpForm.value);
  } 
  
}
