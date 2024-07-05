import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-confirmar',
  standalone: true,
  imports: [CommonModule, QRCodeModule],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {
  // DATOS DEL EVENTO
  nombre: string = "Arica Poker Tour";
  fecha: string  = "2024-06-24";
  horario: string = "Desde las 18:00 hrs.";
  lugar: string = "Sala Belén 2 Universidad de Tarapacá Campus";
  descripcion: string = "El torneo de Poker más grande del norte de Chile.";
  codigo: string = "";
  qrinfo: string = "";

  visible: boolean = true;


  public generar(): void {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres[randomIndex];
    }
    this.visible = false;
    this.codigo = codigo;
    this.qrinfo = codigo;
  }
}
