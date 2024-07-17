import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-addd',
  templateUrl: './product-addd.component.html',
  styleUrl: './product-addd.component.css'
})
export class ProductAdddComponent {

  prodData:any;

  constructor(private dbServ:DatabaseServiceService,private routerObj:Router){}

  ngOnInit(){
    this.prodData = new FormGroup({
      pname:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
      price:new FormControl("",[Validators.required,Validators.pattern("^[0-9]{3,20}$")]),
      company:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")])
      
    })
  }

  getData(){
    console.log(this.prodData.value);
  }

  addData(){
    console.log(this.prodData.value);
    this.dbServ.addRecord("product",this.prodData.value).subscribe(()=>{
      window.alert("Record Added Sucessfully");
      this.routerObj.navigate([`/maindb/productdash`]);
    })
  }
}
