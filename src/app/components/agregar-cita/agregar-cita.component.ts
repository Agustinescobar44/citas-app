import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  nombre= '';
  fecha= '';
  hora='';
  sintomas='';
  @Output() nuevaCita= new EventEmitter<any>();
  formularioIncorrecto= false;
  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    this.chekearCampos();
    if(!this.formularioIncorrecto){
      const cita= {
        nombre:this.nombre,
        fecha:this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      }
      this.resetCampos();
      this.nuevaCita.emit(cita);
    }
  }
  chekearCampos(){
    this.formularioIncorrecto = this.nombre == "" || this.fecha =="" || this.hora =="" || this.sintomas=="";
  }
  resetCampos(){
    this.nombre= '';
    this.fecha= '';
    this.hora='';
    this.sintomas='';
  }
}
