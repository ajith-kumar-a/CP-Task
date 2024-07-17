import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  userForm:any;

  ngOnInit(){
    this.userForm = new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      contact:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{10}$")]),
      term:new FormControl("",Validators.requiredTrue)
    })
  }

  getData(){
    console.log(this.userForm.value);
  }
}
