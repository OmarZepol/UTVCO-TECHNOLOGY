import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DesarrolloComponent } from './pages/desarrollo/desarrollo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { MantenimientoComponent } from './pages/mantenimiento/mantenimiento.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VentamodulosComponent } from './pages/ventamodulos/ventamodulos.component';

const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'desarrollo', component: DesarrolloComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mantenimiento', component: MantenimientoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'venta-modulos', component: VentamodulosComponent},
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
