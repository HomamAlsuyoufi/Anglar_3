import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-detalhes',
  templateUrl: './pessoa-detalhes.component.html',
  styleUrls: ['./pessoa-detalhes.component.scss']
})
export class PessoaCadastrarComponent {
  @Input() pessoa: Pessoa = new Pessoa();

  @Output() retorno = new EventEmitter<Pessoa>();

  enviarParaLista() {

    // Verifique se os campos foram preenchidos corretamente antes de emitir o evento
    if (this.pessoa.nome && this.pessoa.idade) {
      this.retorno.emit(this.pessoa);
      this.pessoa = new Pessoa();
    }
  }
}
