import { Component } from '@angular/core';
import { DatabaseServiceService } from '../../shared/services/database-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  uid:any;
  upass:any;
  userData:any=[];
  constructor(private dbServ:DatabaseServiceService,private routerObj:Router){}

  singIn(){
   this.dbServ.getRecord("users").subscribe((res:any) =>{
    this.userData = res;
     let data = this.userData.filter((val:any)=>{
        return val.uname === this.uid && val.upass === this.upass
      });
      if(data.length > 0){
        sessionStorage.setItem("user",this.uid);
        this.routerObj.navigate(['maindb']);
      }else{
        window.alert("Wrong Crendential Inserted");
        this.uid = "";
        this.upass = "";
      }
   })
  }

}
