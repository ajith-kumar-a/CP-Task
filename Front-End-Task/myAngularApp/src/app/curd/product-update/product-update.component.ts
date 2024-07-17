import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  id:any;
  prodData:any;
  oldData:any;
  constructor(private acRoutObj:ActivatedRoute,private dbserv:DatabaseServiceService,private routerObj:Router){}

  ngOnInit(){
    this.acRoutObj.paramMap.subscribe((para)=>{
      this.id = para.get('id');
      this.dbserv.getSingleRecord("product",this.id).subscribe((res)=>{
        this.oldData = {...res};
        console.log(this.prodData);
        this.prodData = new FormGroup({
          pname:new FormControl(this.oldData.pname,[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")]),
          price:new FormControl(this.oldData.price,[Validators.required,Validators.pattern("^[0-9]{3,20}$")]),
          company:new FormControl(this.oldData.company,[Validators.required,Validators.pattern("^[a-zA-Z ]{3,20}$")])
          
        })
       
      })
    })
   
    
  }

  addData(){
    console.log(this.prodData.value);
    this.dbserv.updatRecord("product",this.id,this.prodData.value).subscribe(()=>{
      window.alert("Record Added Sucessfully");
      this.routerObj.navigate([`/maindb/productdash`]);
    })
  }


}
