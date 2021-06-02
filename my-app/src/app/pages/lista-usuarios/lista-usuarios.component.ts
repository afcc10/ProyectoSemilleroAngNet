import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  totalUsuarios!: number; 
  usuariosFemeninos!: number; 
  usuariosMasculinos!: number;

  listaUsuarios: Array<Usuario> = [ {
    cedula: 24056078,
    nombre: 'Alejandra Rivera',
    genero: 'F',
    direccion: 'clle 45 # 12-48',
    telefono: '8779045',
    fechaNacimiento: new Date('1986-05-03'),
      salario: 2600000
    },
    {
    cedula: 1053768901,
    nombre: 'Julian castillo',
    genero: 'M',
    direccion: 'Av Santander # 12-48', telefono: '3214567893', fechaNacimiento: new Date('1990-02-12'), salario: 1300000
    }, {
    cedula: 16077654,
    nombre: 'Andrés Felipe Robles',
    genero: 'M',
    direccion: 'Cra 12 # 56-87',
    telefono: '8775322',
    fechaNacimiento: new Date('1980-11-23'), salario: 3200000
    }, {
      cedula: 1054123456,
      nombre: 'Ximena Lopez',
    genero: 'F',
    direccion: 'clle 45 # 12-48',
     telefono: '3145679012', fechaNacimiento: new Date('1987-05-12'), salario: 3200000
    }, {
    cedula: 24876532,
    nombre: 'Gabriela Santo Domingo', genero: 'F',
    direccion: 'clle 4 # 10-43', telefono: '8906543',
    fechaNacimiento: new Date('1982-05-12'),
      salario: 4600000
    },
    {
      cedula:  1055789234,
    nombre: 'Mariana Cardenas',
    genero: 'F',
    direccion: 'Cra 8 # 19-33',
    telefono: '3158326711', fechaNacimiento: new Date('1995-09-15'), salario: 270000
    }, {
    cedula: 16077823,
    nombre: 'David Alegandro Alavarez', genero: 'M',
    direccion: 'clle 11a # 26-19', telefono: '3172398765', fechaNacimiento: new Date('1997-11-21'), salario: 1550000
    }, {
      cedula: 1054632163,
    nombre: 'Camilo Londoño',
    genero: 'M',
    direccion: 'Cra 29a # 56-90',
    telefono: '3173307743', fechaNacimiento: new Date('2000-11-21'), salario: 1550000
    }, {
    cedula: 1054632163,
    nombre: 'Luisa Fernanda Arango',
    genero: 'F',
    direccion: 'Clle 19 # 18',
    
     
    telefono: '3176419011', fechaNacimiento: new Date('2000-01-14'), salario: 1450000
    }, {
    cedula: 1054632163,
    nombre: 'Roberto Vasquez',
    genero: 'M',
    direccion: 'Clle 56 # 20-17',
    telefono: '3215437222', fechaNacimiento: new Date('1991-07-21'), salario: 1620000
    } ];

  constructor(private route: Router) { }
  generoFiltrado = 'todos';
  ngOnInit(): void {
    this.usuariosMasculinos = this.totalUsuariosMasculinos(); 
    this.usuariosFemeninos = this.totalUsuariosFemeninos(); 
    this.totalUsuarios = this.totalUsuariosActivos();
  }

  totalUsuariosFemeninos(): number {
    return this.listaUsuarios.filter(d => d.genero === 'F').length;
    }

  totalUsuariosMasculinos(): number {
    return this.listaUsuarios.filter(d => d.genero === 'M').length;
  }
  totalUsuariosActivos(): number { 
    return this.listaUsuarios.length;
  }
  obtenerFiltroGenero(genero: string) { 
    this.generoFiltrado = genero;
  }
  selectUsuario(cedula:string | number){
    this.route.navigate(['inicio/usuarios', cedula]);
  }
}
