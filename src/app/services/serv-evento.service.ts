import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServEventoService {
  private rut: string = ''
  private idEvento: number = -1
  
  constructor() { }

  public guardarInfo(rut: string, idEvento: number): void{
    this.rut = rut
    this.idEvento = idEvento
  }

  obtRut(): string{
    return this.rut
  }

  obtIdEvento(): number{
    return this.idEvento
  }
}
