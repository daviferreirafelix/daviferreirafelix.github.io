import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteTesteComponent } from './componente/componente-teste/componente-teste.component';
import { Componente2Component } from './componente/componente2/componente2.component';
import { DiretivasComponent } from './componente/diretivas/diretivas.component';
import { RenderizacaoCondicionalComponent } from './componente/renderizacao-condicional/renderizacao-condicional.component';
import { EventosComponent } from './componente/eventos/eventos.component';
import { EmitindoEventosComponent } from './componente/emitindo-eventos/emitindo-eventos.component';
import { FazendoEventosComponent } from './componente/fazendo-eventos/fazendo-eventos.component';
import { RenderizacaoDeListaComponent } from './componente/renderizacao-de-lista/renderizacao-de-lista.component';
import { PipeOperatorComponent } from './componente/pipe-operator/pipe-operator.component';
import { TwoWayComponent } from './componente/two-way/two-way.component';
import { ComponenteDeRotaComponent } from './componente/componente-de-rota/componente-de-rota.component';
import { UserDetailComponent } from './componente/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteTesteComponent,
    Componente2Component,
    DiretivasComponent,
    RenderizacaoCondicionalComponent,
    EventosComponent,
    EmitindoEventosComponent,
    FazendoEventosComponent,
    RenderizacaoDeListaComponent,
    PipeOperatorComponent,
    TwoWayComponent,
    ComponenteDeRotaComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
