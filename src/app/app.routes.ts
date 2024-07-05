import { Routes } from '@angular/router';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { EnviarInvitacionComponent } from './enviarInvitacion/enviarInvitacion.component';

export const routes: Routes = [
  { path: 'enviarInvitacion/:rut/:id', component: EnviarInvitacionComponent },
  { path: 'confirmar', component: ConfirmarComponent },
];
