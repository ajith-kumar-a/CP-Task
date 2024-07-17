import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrl: './emp-detail.component.css'
})
export class EmpDetailComponent {

  emp:any=[
    {id:101,name:"Ajith",salary:8000000,post:"Manager",address:"Chennai"},
    {id:102,name:"Kumar",salary:7000000,post:"GM",address:"Chennai"},
    {id:103,name:"AVUDAYAPPAN",salary:10000000,post:"CEO",address:"Chennai"},
    {id:104,name:"Mohan",salary:5000000,post:"SDE",address:"Chennai"},
    {id:105,name:"Saras",salary:70000000,post:"CTO",address:"Chennai"},
  ]

}
