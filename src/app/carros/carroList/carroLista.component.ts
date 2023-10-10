import { Component, ViewChild, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carro-lista',
  templateUrl: './carroLista.component.html',
  styleUrls: ['./carroLista.component.scss']
})
export class CarroListaComponent {
  carros: Carro[] = [];
  novoCarro: Carro = new Carro();

  modalService = inject(NgbModal);


  constructor() {}


  ngOnInit() {
    
    let carro = new Carro();
    carro.id = 1;
    carro.ano = 2000;
    carro.nome = 'Monza';
    this.carros.push(carro);
  }


  abrirModalCadastrar(abc: any){
    this.carroParaEditar = new Carro();
    this.modalService.open(abc, { size: 'lg' });
  }


  carroParaEditar: Carro = new Carro();
  abrirModalEditar(abc: any, carro: Carro) {
    this.carroParaEditar = { ...carro };
    this.modalService.open(abc, { size: 'lg' });
  }


  
  atualizarLista(carro: Carro){
    
    if (this.carroParaEditar.id > 0) {
      let index = this.carros.findIndex(carro => carro.id === this.carroParaEditar.id);
      this.carros[index] = carro;

    } else{
      this.carros.push(carro);
    }

    this.modalService.dismissAll();
  }


  salvarEdicao() {
    
  let index = this.carros.findIndex(carro => carro.nome === this.carroParaEditar.nome);

  index = index +1;

  if (index !== -1) {
    this.carros[index].nome = this.carroParaEditar.nome;
    this.carros[index].ano = this.carroParaEditar.ano;
  }
  this.modalService.dismissAll();
  }
}
