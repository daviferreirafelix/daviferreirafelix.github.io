import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-teste',
  templateUrl: './componente-teste.component.html',
  styleUrls: ['./componente-teste.component.css'],
})
export class ComponenteTesteComponent {
  nome = 'davi';
  @Input() titulo = '';

  constructor(){
    this.nome = `${this.nome} antonio`;
  }
}
