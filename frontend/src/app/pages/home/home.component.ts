import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Valor enlazado desde el componente AppComponent';
  tareas = [
    'Estudiar Angular',
    'Estudiar Testing en Angular',
    'Estudiar Vue.js',
    'Estudiar Testing en Vue.js',
    'Estudiar NestJS',
  ];
  name = 'Juan';
  visibilidad = true;
  img =
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    persona= {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 25
    }
    clickHandler(){
      alert('Clickeaste en el botón');
    }
    dblClickHandler(){
      alert('Doble clickeaste en el botón');
    }
    changeHandler(event: any){
      alert(event.target.value);
    }
    keyDownHandler(event: any){
      console.log(event.target.value);
    }
}
