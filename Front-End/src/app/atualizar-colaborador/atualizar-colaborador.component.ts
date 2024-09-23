import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-colaborador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atualizar-colaborador.component.html',
  styleUrls: ['./atualizar-colaborador.component.scss']
})
export class AtualizarColaboradorComponent {
  id = '';
  name = '';
  unitId = '';
  userId = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.buscarColaborador();
  }

  buscarColaborador() {
    this.http.get(`http://localhost:5105/api/Collaborator/${this.id}`).subscribe((colaborador: any) => {
      this.name = colaborador.nome;
      this.unitId = colaborador.unidadeId;
      this.userId = colaborador.usuarioId;
    });
  }

  atualizar() {
    this.http.put(`http://localhost:5000/api/Collaborator/${this.id}`, {
      nome: this.name,
      unidadeId: this.unitId,
      usuarioId: this.userId
    }).subscribe(response => {
      console.log('Colaborador atualizado', response);
    });
  }
}
