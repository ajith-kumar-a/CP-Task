import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {

  myProduct:any;
  users:any;
  constructor(private dbserv:DatabaseServiceService){}


    ngOnInit(){
      this.fetchData();

      this.dbserv.getRecord("users").subscribe((res) =>{
        this.users = res;
        console.log(res);
      })

    }

    fetchData(){
      this.dbserv.getRecord("product").subscribe((res)=>{
        this.myProduct = res;
        console.log(res);
      })
    }

    deleteData(id:any){

      if(window.confirm(`are you sure to delete record with id : ${id}`)){
        this.dbserv.deleteRecord("product",id).subscribe(()=>{
          window.alert("Record Delete Successfully");
          this.fetchData();
        })
      }
    }
  
    changeComp(){
      
    }
}
