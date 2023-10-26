import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}

  
  authForm= new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
  })


  onSubmit(){}

}
