import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carro } from '../carro';
@Component({
  selector: 'app-carro-detalhes',
  templateUrl: './carro-detalhes.component.html',
  styleUrls: ['./carro-detalhes.component.scss']
})
export class CarroDetalhesComponent {

  @Input() carro: Carro = new Carro();

  @Output() retorno = new EventEmitter<Carro>();

  enviarParaLista() {

    // Verifique se os campos foram preenchidos corretamente antes de emitir o evento
    if (this.carro.nome && this.carro.ano) {
      this.retorno.emit(this.carro);// ESTA LINHA ESTÁ PEGANDO O CARRO DA TELA E ENVIANDO PARA A LISTA NA FUNÇÃO atualizarLista()
      this.carro = new Carro(); // Limpe o objeto Carro após o cadastro
    }
  }
}
