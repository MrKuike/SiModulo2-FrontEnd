import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServEventoService } from '../services/serv-evento.service';

@Component({
  selector: 'app-confirmar',
  standalone: true,
  imports: [CommonModule, QRCodeModule, HttpClientModule],
  templateUrl: './confirmar.component.html',
  styleUrl: './confirmar.component.css'
})
export class ConfirmarComponent {


  constructor(private http: HttpClient, private servEventoService: ServEventoService){}
  
  ngOnInit(){
    console.log(this.servEventoService.obtRut());
    
    if(!this.servEventoService.obtRut()) return
    this.http.get<{
      idEvento: number,
      nombre: string,
      fecha: string,
      horario: string,
      lugar: string,
      descripciN: string
  }>(`http://192.168.71.35:3000/obtInfoEvento/${this.servEventoService.obtIdEvento()}`).subscribe((response) =>{
    console.log(response);
    
      this.nombre = response.nombre
      this.fecha = response.fecha
      this.horario = response.fecha
      this.lugar = response.lugar
      this.descripcion = response.descripciN
    });
  }
    
  // DATOS DEL EVENTO
  nombre: string = "";
  fecha: string  = "";
  horario: string = "";
  lugar: string = "";
  descripcion: string = "";
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

    this.http.patch(`http://192.168.71.35:3000/confirmarAsistencia/${this.servEventoService.obtIdEvento()}/${this.servEventoService.obtRut()}`, {estado: 1}).subscribe({
      next: (response) => {
        console.log('Estado actualizado:', response);
      },
      error: (error) => {
        console.error('Error actualizando el estado:', error);
      }
    });

    console.log(this.servEventoService.obtIdEvento());
    console.log(this.servEventoService.obtRut());
  }
}
