import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  userForm:any;

  ngOnInit(){
    this.userForm = new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z 0-9]{6,20}$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      term:new FormControl("",Validators.requiredTrue)
    })
  }

  getData(){
    console.log(this.userForm.value);
  }
}
