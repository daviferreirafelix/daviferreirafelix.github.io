import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.css']
})
export class PipeOperatorComponent {
  date: Date = new Date();
  dataHoje: string = this.date.toLocaleDateString();

  moeda = 543.2;
}


// tratamento e formatação de strings sem a ncessidade de usar JS e CSS
