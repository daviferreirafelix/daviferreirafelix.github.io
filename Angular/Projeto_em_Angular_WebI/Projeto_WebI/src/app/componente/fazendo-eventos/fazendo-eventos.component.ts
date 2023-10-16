import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fazendo-eventos',
  templateUrl: './fazendo-eventos.component.html',
  styleUrls: ['./fazendo-eventos.component.css']
})
export class FazendoEventosComponent {

  @Output() clicked: EventEmitter<void> = new EventEmitter();
  // em Java ficaria assim: EventEmitter onClick = new EventEmitter<void>();

onClick(): void {
  this.clicked.emit();
 }
}



// IGNORE - APENAS RELEMBRANDO SOBRE GENERICS
function abc <T> (value: T): T {
  return value;
}

//console.log(abc<number>(32)); // tipa a func como number e retorna 32
//console.log(abc<string>("Hello")) // tipa a func como string e retorna Hello
//console.log(abc<boolean>(true)) // tipa a func como boolean e retorna true
