import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarUnidadeComponent } from './atualizar-unidade.component';

describe('AtualizarUnidadeComponent', () => {
  let component: AtualizarUnidadeComponent;
  let fixture: ComponentFixture<AtualizarUnidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarUnidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarUnidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
