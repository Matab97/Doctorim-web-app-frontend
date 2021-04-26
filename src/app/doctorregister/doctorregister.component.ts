import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctorregister',
  templateUrl: './doctorregister.component.html',
  styleUrls: ['./doctorregister.component.css']
})
export class DoctorregisterComponent implements OnInit {

  constructor(ngForm: NgForm) { }

  ngOnInit(): void {
  }

}
