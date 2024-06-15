import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})


//! Se define la logica del componente
export class LabsComponent {
  title = 'Valor enlazado desde el componente AppComponent';
  tareas=[
    "Estudiar Angular",
    "Estudiar Testing en Angular",
    "Estudiar Vue.js",
    "Estudiar Testing en Vue.js",
    "Estudiar NestJS"
  ]
}
