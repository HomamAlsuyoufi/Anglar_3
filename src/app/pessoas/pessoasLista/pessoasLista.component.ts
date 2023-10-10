import { Component , inject} from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoasLista',
  templateUrl: './pessoasLista.component.html',
  styleUrls: ['./pessoasLista.component.scss']
})
export class PessoasListComponent {
  pessoas: Pessoa[] = [];

  modalService = inject(NgbModal);

  constructor() {}

  ngOnInit() {
    let pessoa = new Pessoa();
    pessoa.id = 1;
    pessoa.idade = 21;
    pessoa.nome = 'Homam';
    this.pessoas.push(pessoa);
  }

  abrirModalCadastrar(abc: any){
    this.pessoaParaEditar = new Pessoa();
    this.modalService.open(abc, { size: 'lg' });

    const element: HTMLElement = document.getElementById('h4') as HTMLElement 
    element.innerHTML = 'Cadastrar Pessoa'
  }

  pessoaParaEditar: Pessoa = new Pessoa(); 
  
  abrirModalEditar(abc: any, Pessoa: Pessoa) {
    this.pessoaParaEditar = { ...Pessoa };
    this.modalService.open(abc, { size: 'lg' });

    const element: HTMLElement = document.getElementById('h4') as HTMLElement 
    element.innerHTML = 'Editar Pessoa'
  }

  atualizarLista(pessoa: Pessoa){    
    if (this.pessoaParaEditar.id > 0) {
      let index = this.pessoas.findIndex(pessoa => pessoa.id === this.pessoaParaEditar.id);
      this.pessoas[index] = pessoa;

    } else{
      this.pessoas.push(pessoa);
    }

    this.modalService.dismissAll();
  }
}
