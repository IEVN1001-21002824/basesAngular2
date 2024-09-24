import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  imageWidth:number=50;
  imageMargin:number=5;
  MuestraImg:boolean=true;
  mostrarImagen():void{
    this.MuestraImg=!this.MuestraImg
  }

  productos: any[] = [
    {
      "productoId": 1,
      "Modelo": "A4",
      "Descripcion": "4 Puertas",
      "Year": "Febrero 2 2020",
      "Precio": "20000",
      "Color": "Azul",
      "ImagenURL1": "https://assets.adac.de/image/upload/v1/Autodatenbank/Fahrzeugbilder/im05969-1-audi-a4-gtron.jpg"
    },
    {
      "productoId": 2,
      "Modelo": "Sentra",
      "Descripcion": "2 Puertas",
      "Year": "Marzo 5 2018",
      "Precio": "18000",
      "Color": "Verde",
      "ImagenURL1": "https://www.nissaniguala.com.mx/resourcefiles/newvehicleimages/nissan-2021-sentra-sense-tm-azul-zafiro-negro-exterior-v1-d.jpg"
    },
    {
      "productoId": 3,
      "Modelo": "March",
      "Descripcion": "2 Puertas",
      "Year": "Agosto 8 2021",
      "Precio": "15000",
      "Color": "Negro",
      "ImagenURL1": "https://nissanjidosha.mx/nissan/march/img/m-gris-oxford.webp"
    }
  ];
}
