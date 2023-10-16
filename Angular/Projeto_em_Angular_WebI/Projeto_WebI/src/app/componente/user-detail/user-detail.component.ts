import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from 'src/app/Users';
import { RenderizacaoDeListaServiceService } from 'src/app/services/renderizacao-de-lista-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  users?: Users;
  name: string = '';

  constructor(private usersList: RenderizacaoDeListaServiceService,
              private route: ActivatedRoute){
    this.getUsers();
  }

  getUsers(){
    this.name = this.route.snapshot.params['name'];
    this.usersList.getUserName(this.name).subscribe(users => this.users = users);
  }

}
