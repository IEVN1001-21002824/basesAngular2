import { Component } from '@angular/core';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  dia: number | null = null;
  mes: number | null = null;
  anio: number | null = null;
  sexo: string = '';
  edad: number | null = null;
  signo: string = '';
  imagenSigno: string = '';
  nombreCompleto: string = '';

  obtenerSignoChino(): void {
    if (this.anio) {
      const signosChinos = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
      this.signo = signosChinos[(this.anio - 4) % 12];

      const imagenes: { [key: string]: string } = {
        'Rata': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg',
        'Buey': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Buey.jpg',
        'Tigre': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpg',
        'Conejo': 'https://peopleenespanol.com/thmb/-ekXDGhFH6Baw6C29OGuDxf8iDQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165927323-2000-c6361314aab74b7485a5ea677666ba83.jpg',
        'Dragón': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCY6i3Hwb2td_X84xj6vF6qTXjTl-qpIykSg&s',
        'Serpiente': 'https://peopleenespanol.com/thmb/Who-b06dJwjtqnuJ406zgMaq4kg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165965553-2000-e4700b87c9fd404681a502f7095c2ac5.jpg',
        'Caballo': 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg',
        'Cabra': 'https://peopleenespanol.com/thmb/Fwy99mIonHJYbhmA9AOTeWCpkdU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967741-2000-12afb4d370f14afe856f05ba36fe1693.jpg',
        'Mono': 'https://peopleenespanol.com/thmb/Wpxezb6zTd3sJ4sB90GtyUfFPpo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165967347-2000-141e78d49c344d73a216c09df52f7fcb.jpg',
        'Gallo': 'https://peopleenespanol.com/thmb/Th2wLXhS9Tzh3VR7DtVB9CwgUFE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Horoscopo-chino-165926089-2000-25a52aba2d0942679de98ba836f1ab9f.jpg',
        'Perro': 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg',
        'Cerdo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqyqOjMPfUtmYKoCOEHDQn-mnq-jByyVh6g&s'
      };

      this.imagenSigno = imagenes[this.signo];

      // Calcular la edad
      this.calcularEdad();

      // Concatenar nombre completo
      this.nombreCompleto = `${this.nombre} ${this.apellido1} ${this.apellido2}`;
    }
  }

  calcularEdad(): void {
    const fechaActual = new Date();
    const fechaNacimiento = new Date(this.anio!, this.mes! - 1, this.dia!);

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    // Si aún no ha pasado el cumpleaños este año, resta 1 a la edad
    if (mesActual < fechaNacimiento.getMonth() || 
       (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {
      edad--;
    }

    this.edad = edad;
  }

  imprimirDatos(): void {
    this.obtenerSignoChino();
  }
}
  

