import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredential } from 'src/app/model/userCredential';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario: UserCredential;

  constructor(private route:Router) {
    this.loginUsuario = new UserCredential();
   }

  ngOnInit(): void {
  }
  login(frmLogin: NgForm){
    if (frmLogin.valid){
      this.route.navigate(['inicio']);
    }
  }

}
