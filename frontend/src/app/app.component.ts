import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], //!tengo que agregar el CommonModule para que funcione el ngFor
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Valor enlazado desde el componente AppComponent';
  tareas=[
    "Estudiar Angular",
    "Estudiar Testing en Angular",
    "Estudiar Vue.js",
    "Estudiar Testing en Vue.js",
    "Estudiar NestJS"
  ]
}
