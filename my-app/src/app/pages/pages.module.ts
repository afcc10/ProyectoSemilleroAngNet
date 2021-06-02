import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaCustomersComponent } from './lista-customers/lista-customers.component';
import { InsertCustomersComponent } from './insert-customers/insert-customers.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    HomeComponent,
    ListaClientesComponent,
    ListaCustomersComponent,
    InsertCustomersComponent    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class PagesModule { }
