import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ListaUsuariosComponent } from '../lista-usuarios/lista-usuarios.component';

const routes: Routes = [{
  path: '',
  component: InicioComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'Usuarios',
      component: ListaUsuariosComponent
    },
    {
      path: '',
      redirectTo:'home',
      pathMatch: 'full'
    }
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }