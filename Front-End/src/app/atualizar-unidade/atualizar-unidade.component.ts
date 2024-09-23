import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-unidade',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atualizar-unidade.component.html',
  styleUrls: ['./atualizar-unidade.component.scss']
})
export class AtualizarUnidadeComponent {
  id = '';
  codigo = '';
  nome = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.buscarUnidade();
  }

  buscarUnidade() {
    this.http.get(`http://localhost:5105/api/unidade/${this.id}`).subscribe((unidade: any) => {
      this.codigo = unidade.codigo;
      this.nome = unidade.nome;
    });
  }

  atualizar() {
    this.http.put(`http://localhost:5000/api/unidade/${this.id}`, {
      codigo: this.codigo,
      nome: this.nome
    }).subscribe(response => {
      console.log('Unidade atualizada', response);
    });
  }
}
