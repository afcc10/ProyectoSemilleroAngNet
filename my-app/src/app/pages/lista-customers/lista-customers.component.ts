import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/model/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-lista-customers',
  templateUrl: './lista-customers.component.html',
  styleUrls: ['./lista-customers.component.css']
})
export class ListaCustomersComponent implements OnInit {

  listaCustomers : Customers[] | undefined;
  constructor(public clienteService: CustomersService) { 
    this.clienteService.obtenerClientes();
  }

  ngOnInit(): void {
   
  }

}
