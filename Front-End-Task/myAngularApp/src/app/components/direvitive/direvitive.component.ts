import { Component } from '@angular/core';

@Component({
  selector: 'app-direvitive',
  templateUrl: './direvitive.component.html',
  styleUrl: './direvitive.component.css'
})
export class DirevitiveComponent {

  isCond:boolean = true;
  isCond2:boolean = false;

  bikes:string[] = ["BMW","HERO","HONDA","YAMAHA","JAWA","BAJAJ"];

  myBike:string = "JAWA";
}
