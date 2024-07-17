import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-img-task1',
  templateUrl: './toggle-img-task1.component.html',
  styleUrl: './toggle-img-task1.component.css'
})
export class ToggleImgTask1Component {
 imgPath:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLbhWqYG1BRGmIj3kQO4tWe1yp6N5IUHCg&s"

  imgName:string = "EVEE";

  changeImage(){

    if(this.imgName == "EVEE"){
      this.imgName = "Charizard";
      this.imgPath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWeulTpAkLaqmvLWzL073y4Obbimkt7EqJg&s";
    }else{
      this.imgName = "EVEE";
       this.imgPath= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNLbhWqYG1BRGmIj3kQO4tWe1yp6N5IUHCg&s"

    }
  }
}
