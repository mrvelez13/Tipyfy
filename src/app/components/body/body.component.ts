import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar:boolean = false;
  
  frase:any = {
    mensaje: "Una mujer que entienda los problemas de llevar una casa, está muy cerca de entender los de llevar un país",
    autor: "Margareth Tacher"
  };
}
