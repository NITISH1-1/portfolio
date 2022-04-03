import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
  Links:Array<{id:number, name:string}> = [
    {id:1, name: 'Download Resume'},
    {id:2, name: 'Skype me'},
    {id:3, name: 'Hangout with me'},
    {id:4, name: 'Email me'},
    {id:5, name: 'Visit my Interviewbit'},
    {id:6, name: 'Visit my LeetCode'}
  ]; 
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    email: ['', Validators.email],
    contact: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
