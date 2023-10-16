import { Component } from '@angular/core';
import { RenderizacaoDeListaServiceService } from '../../services/renderizacao-de-lista-service.service';
import { Users } from '../../Users';


@Component({
  selector: 'app-renderizacao-de-lista',
  templateUrl: './renderizacao-de-lista.component.html',
  styleUrls: ['./renderizacao-de-lista.component.css'],
})
export class RenderizacaoDeListaComponent {
  userLocation = '';
  users: Users[] = [];

  constructor(private listService: RenderizacaoDeListaServiceService) {
    this.getUsers();
  }

  mostrarLocalizacao(user: Users): void {
    this.userLocation = `A localização de ${user.name} é ${user.location}.`;
  }

  removeUser(users: Users[], user: Users) {
    this.users = this.listService.removeUsers(users, user);
  }

  getUsers(): void {
    this.listService.httpRequest().subscribe((users) => this.users = users);
  }
}
