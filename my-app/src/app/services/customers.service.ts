import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cliente } from '../model/cliente';
import { Customers } from '../model/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  readonly url = environment.urlApiTaller;
  list: Customers[] | undefined;
  constructor(private http: HttpClient) { }

  obtenerClientes(){
    
    this.http.get(this.url).toPromise()
            .then(data=>{
              this.list = data as Customers[];
            })    
  }

  guardarCustomerService(customer: Customers):Observable<Customers>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const body=JSON.stringify(customer);
    return this.http.post<Customers>(this.url,body,httpOptions );
  }

}
