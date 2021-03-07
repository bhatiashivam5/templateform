import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helper/mustMatch.validator';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

Registerform!: FormGroup;
Submitted = false
  constructor( private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.Registerform=this.formbuilder.group({
    username:['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    contact:['',[Validators.required,Validators.minLength(10)]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmpassword:['',Validators.required],
    gender:['',Validators.required],
    location: ['',Validators.required],
    checkbox: [false, Validators.requiredTrue],
  },{
    validator:MustMatch('password', 'confirmpassword')
  });
}
  get f()
  {
    return this.Registerform.controls;
  }

  getDetails()
  {
    this.Submitted=true;
    if(this.Registerform.invalid){
      return;
    }

  }

}
