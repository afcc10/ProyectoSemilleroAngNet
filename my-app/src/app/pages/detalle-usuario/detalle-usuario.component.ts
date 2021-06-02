import { Component, OnInit } from '@angular/core';
import { DetalleUsuario } from 'src/app/model/detalleUsuarios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const cedulaSelec = this.activeRoute.snapshot.paramMap.get('id'); 
    this.usuarioSeleccionado = this.detalleUsuarios.find(d => d.cedula === cedulaSelec);
  }

  detalleUsuarios: Array<DetalleUsuario> = [ 
    {
      cedula: '24056078',
      descripcion: 'Persona encargada de la logistica de la empresa' },
    {
      cedula: '1053768901',
      descripcion: 'Lider del departamento de ventas en la ciudad de Armenia.'
    }, 
    {
      cedula: '16077654',
      descripcion: 'Departamento de diseño e inovación para nuevos productos.' },
    {
      cedula: '1054123456',
      descripcion: 'Lider de la zona oriental'
    } 
  ];

  usuarioSeleccionado: DetalleUsuario | undefined;

}
