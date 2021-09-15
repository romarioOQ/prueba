import { Component } from '@angular/core';
import {Usuario} from './models/usuario/userModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Romario Orcoapaza';
  nombre = 'romario';
  apellido = 'Orcoapaza';
  edad = 27

  public snombre: String;
  public mapellido: String;
  public aedad: Number

  public usuario: Usuario;
  
  public exists: Boolean;
  public arreglo: Usuario[];
  public color: String;

  constructor(){
    this.color = "black"
    this.arreglo = new Array<Usuario>(); 
    this.exists = true;
    this.mapellido = "";
    this.snombre = "";
    this.aedad = 0
    this.usuario = new Usuario("Saul","Orcoapaza",29,"saul@gmail.com")
    this.arreglo.push(
      new Usuario("romario","Orcoapaza",29,"romario@gmail.com"),
      new Usuario("Crispin","Orcoapaza",29,"crispin@gmail.com"),
      new Usuario("Jose","Orcoapaza",29,"jose@gmail.com")
    )
   }

  alerta(){
    alert("hola mundo");
  }

  mostrar(){
    setTimeout(()=>{
      this.mapellido = "Quisocala";
      this.snombre = "Enrique";
      this.aedad = 29
    }, 1000)

  }

  condicional(){
    this.exists=false;
    setTimeout(()=>{
      this.exists=true;
    }, 2000)
  }
}
