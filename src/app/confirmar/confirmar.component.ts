import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmar',
  standalone: true,
  imports: [],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {
  nombre: string = "Arica Poker Tour";
  fecha: string  = "2024-06-24";
  horario: string = "Desde las 18:00 hrs.";
  lugar: string = "Sala Belén 2 Universidad de Tarapacá Campus";
  descripcion: string = "El torneo de Poker más grande del norte de Chile.";
}
