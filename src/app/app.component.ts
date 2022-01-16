import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaCitas:any[] = [];

  agregarCita(cita:any){
    this.listaCitas.push(cita);
  }
}
