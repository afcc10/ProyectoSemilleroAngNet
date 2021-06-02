import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customers } from 'src/app/model/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-insert-customers',
  templateUrl: './insert-customers.component.html',
  styleUrls: ['./insert-customers.component.css']
})
export class InsertCustomersComponent implements OnInit {
  frmCustomer!: FormGroup;
  customer!: Customers;  
  constructor(private frm:FormBuilder,private clienteService: CustomersService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.frmCustomer = this.frm.group({
      customerID: (['', [Validators.required,Validators.maxLength(5)]]), 
      companyName: ['', [Validators.required]], 
      contactName: ['', Validators.required],
      contactTitle: ['', Validators.required],
      Address: ['', [Validators.required]],
      city: ['', Validators.required],
      region!: ['', Validators.required]
       });
  }

  guardarCustomer()
  {
    this.customer = {
      CustomerID:this.frmCustomer.get('customerID')?.value,
      CompanyName:this.frmCustomer.get('companyName')?.value,
      ContactName:this.frmCustomer.get('contactName')?.value,
      ContactTitle:this.frmCustomer.get('contactTitle')?.value,
      Address:this.frmCustomer.get('Address')?.value,
      City:this.frmCustomer.get('city')?.value,
      Region:this.frmCustomer.get('region')?.value
    }
    
    this.clienteService.guardarCustomerService(this.customer).subscribe(() => { 
      this.toastr.success('Registro adicionado', 'el registro se guardo exitosamente');
      this.frmCustomer.reset();      
    });
  }

}
