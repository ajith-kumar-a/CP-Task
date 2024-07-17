import { Component } from '@angular/core';

@Component({
  selector: 'app-my-pipe',
  templateUrl: './my-pipe.component.html',
  styleUrl: './my-pipe.component.css'
})
export class MyPipeComponent {


  msg:string = "Hello friends,you all are fantastic participant."

  emp:any = {
    id:101,
    name:"Ajith",
    salary:950000
  }

  dateObj = new Date();
  
}
