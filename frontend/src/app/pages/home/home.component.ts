import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Valor enlazado desde el componente AppComponent';
  tareas=[
    "Estudiar Angular",
    "Estudiar Testing en Angular",
    "Estudiar Vue.js",
    "Estudiar Testing en Vue.js",
    "Estudiar NestJS"
  ]

}
