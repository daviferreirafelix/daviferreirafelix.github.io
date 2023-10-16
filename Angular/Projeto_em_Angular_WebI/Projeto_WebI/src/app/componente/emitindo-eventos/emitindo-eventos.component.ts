import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emitindo-eventos',
  templateUrl: './emitindo-eventos.component.html',
  styleUrls: ['./emitindo-eventos.component.css'],
})
export class EmitindoEventosComponent {
  podeMostrar = true;

  @Input() onClick(){
    this.podeMostrar = !this.podeMostrar;
  }

}
