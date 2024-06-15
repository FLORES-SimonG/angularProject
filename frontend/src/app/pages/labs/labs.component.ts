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
    "Estudiar Alemán",
    "Estudiar Testing en Angular en Alemán",
    "Estudiar Vue.js en Ingles",
    "Estudiar Testing en Vue.js en Ingles",
  ]
}
