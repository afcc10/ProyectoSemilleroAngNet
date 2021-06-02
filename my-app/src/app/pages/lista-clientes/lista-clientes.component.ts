import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Array<Cliente> = [];
  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    //this.clienteService.obtenerClientes(10).subscribe(d => console.log(d));
  }

  consultarClientes(cantClientes: string) {
    if (cantClientes) {
      console.log(cantClientes); 
      this.clienteService.obtenerClientes(Number(cantClientes))
        .subscribe((lstClients: Array<Cliente>) => {
          this.clientes = lstClients;
        });
    } else {
      alert('Ingrese la cantidad de clientes que desea visualizar');
      this.clientes = [];
    }
  }

}
