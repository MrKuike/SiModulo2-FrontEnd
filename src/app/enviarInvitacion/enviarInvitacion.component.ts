import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ServEventoService } from "../services/serv-evento.service";

@Component({
    selector: 'enviar-invitacion',
    standalone: true,
    template: `<h1>Hola</h1>`,
  })
export class EnviarInvitacionComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private ServEventoService: ServEventoService){}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params);
            this.ServEventoService.guardarInfo(params['rut'], params['id'])
            this.router.navigate(['confirmar'])
        })
    }
}