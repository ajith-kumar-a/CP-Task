import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  idly:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuPIz8U4lBqVOfTefmUx2tfsM9gC4WeVKsQ&s";
  dosa:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNRkQBAaLqrXbPH1qQncIKl6ZuusEMTndEA&s";
  vada:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Fjdyewr-mGAdEjeMhhzk95igIlBxD1HegA&s";
  pori:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPFu7zDtA0JmsvGTG0Ube4kR3JFFOqBjpOA&s";

  constructor() { }

  breakFast = [
    {name:"Idly",price:"30",photo:this.idly},
    {name:"Dosa",price:"40",photo:this.dosa},
    {name:"Vada",price:"10",photo:this.vada},
    {name:"Pori",price:"50",photo:this.pori},
  ]
}
