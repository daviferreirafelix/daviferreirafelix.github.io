import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderizacaoDeListaComponent } from './componente/renderizacao-de-lista/renderizacao-de-lista.component';
import { ComponenteDeRotaComponent } from './componente/componente-de-rota/componente-de-rota.component';
import { UserDetailComponent } from './componente/user-detail/user-detail.component';
import { ComponenteTesteComponent } from './componente/componente-teste/componente-teste.component';

const routes: Routes = [
  {
    path: '',
    component: ComponenteTesteComponent,
  },
  {
    path: 'componente/componente-de-rota',
    component: ComponenteDeRotaComponent,
  },
  {
    path: 'componente/renderizacao-de-lista',
    component: RenderizacaoDeListaComponent,
  },
  {
    path: 'componente/renderizacao-de-lista/:name',
    component: UserDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

// export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);

// tanto faz a forma que for utilizada a importação desta classe, mas o padrão Angular agora é o @NgModule
