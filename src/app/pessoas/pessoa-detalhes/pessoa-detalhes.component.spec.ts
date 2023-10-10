import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaCadastrarComponent } from './pessoa-detalhes.component';

describe('PessoaCadastrarComponent', () => {
  let component: PessoaCadastrarComponent;
  let fixture: ComponentFixture<PessoaCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaCadastrarComponent]
    });
    fixture = TestBed.createComponent(PessoaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});