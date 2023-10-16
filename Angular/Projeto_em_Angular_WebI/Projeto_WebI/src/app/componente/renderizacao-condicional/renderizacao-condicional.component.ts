import { Component } from '@angular/core';

@Component({
  selector: 'app-renderizacao-condicional',
  templateUrl: './renderizacao-condicional.component.html',
  styleUrls: ['./renderizacao-condicional.component.css'],
})
export class RenderizacaoCondicionalComponent {
  podeMostrar = false;

  click(): void {
    this.podeMostrar = !this.podeMostrar;
  }
}
