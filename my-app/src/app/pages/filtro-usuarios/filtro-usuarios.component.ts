import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-usuarios',
  templateUrl: './filtro-usuarios.component.html',
  styleUrls: ['./filtro-usuarios.component.css']
})
export class FiltroUsuariosComponent implements OnInit {

  constructor() { }

  selectedAllUser = 'All'
  @Input() todos = 0; 
  @Input() masculino = 0; 
  @Input() femenino = 0;
  @Output() generoSeleccionado: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
  }
  obtenerGenero(genero: string){
    this.generoSeleccionado.emit(genero);
  }

}
