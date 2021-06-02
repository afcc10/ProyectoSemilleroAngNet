import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { registerLocaleData } from '@angular/common';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  readonly url = environment.urlServicio;
  constructor(private http: HttpClient) { }

  obtenerClientes(cantidad: number): Observable<any> {
    const urlCliente = `${this.url}/?results=${cantidad}`;
    const lstClientes: Array<Cliente> = [];
    return this.http.get<any>(urlCliente).pipe(
      map(clientes => {
        (clientes.results as Array<any>).forEach((registro: any) => {
          lstClientes.push({
            nombre: registro.name.first,
            apellido: registro.name.last,
            detalleDireccion: {
              calle: registro.location.street.number, ciudad: registro.location.city,
              pais: registro.location.country
            },
            foto: registro.picture.medium
          });
        });
        return lstClientes;
      })
    );
  }

}
