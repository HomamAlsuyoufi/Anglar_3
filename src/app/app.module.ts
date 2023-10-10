import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './principal/header/header.component';
import { FooterComponent } from './principal/footer/footer.component';
import { IndexComponent } from './principal/index/index.component';
import { PessoasListComponent } from './pessoas/pessoas-list/pessoas-list.component';
import { CarroListaComponent } from './carros/carroList/carroLista.component';
import { LivroComponent } from './livros/livroList/livro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PessoaCadastrarComponent } from './pessoas/pessoa-cadastrar/pessoa-cadastrar.component';
import { CarroDetalhesComponent } from './carros/carro-detalhes/carro-detalhes.component';
import { LivroCadastrarComponent } from './livros/livro-cadastrar/livro-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    PessoasListComponent,
    CarroListaComponent,
    LivroComponent,
    PessoaCadastrarComponent,
    CarroDetalhesComponent,
    LivroCadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
