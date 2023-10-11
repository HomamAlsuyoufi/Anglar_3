import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroLista',
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
    carro.id = 4;
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
    this.carroParaEditar = Object.assign({},  carro);
    this.modalService.open(abc, { size: 'lg' });}


    geradorId: number = 999;
  
    atualizarLista(carro: Carro) {
      
    
      if (carro.id>0) {
        const index = this.carros.findIndex(carro => carro.id === this.carroParaEditar.id);
        this.carros[index] =  carro;
      } else {
        this.geradorId = this.geradorId + 1;
        carro.id = this.geradorId;
        this.carros.push(carro);
      }
    
      this.modalService.dismissAll();
    }
}
