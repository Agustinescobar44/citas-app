import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

  @Input() listaCitas:any[] = []; 
  @Output() citaBorrada = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  eliminarCita(indice:number):void{
    this.listaCitas.splice(indice,1);
    this.citaBorrada.emit(this.listaCitas);
  }

}
