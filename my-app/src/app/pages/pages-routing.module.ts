import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { InsertCustomersComponent } from './insert-customers/insert-customers.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaCustomersComponent } from './lista-customers/lista-customers.component';
import { ListaUsuariosComponent} from './lista-usuarios/lista-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    {
      path: '',
      redirectTo:'home',
      pathMatch: 'full'
    }, 
    { 
      path: 'usuarios',
      component: ListaUsuariosComponent 
    },
    {
      path: 'clientes',
      component: ListaClientesComponent
    },
    {
      path: 'customers',
      component: ListaCustomersComponent
    },
    {
      path: 'insertCustomers',
      component: InsertCustomersComponent
    },
    {
      path: 'usuarios/:id',
      component: DetalleUsuarioComponent,
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
