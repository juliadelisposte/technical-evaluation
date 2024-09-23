import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-unidades',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listagem-unidades.component.html',
  styleUrls: ['./listagem-unidades.component.scss']
})
export class ListagemUnidadesComponent implements OnInit {
  unidades: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarUnidades();
  }

  listarUnidades() {
    this.http.get('http://localhost:5105/api/unit').subscribe({
      next: (response) => {
        this.unidades = (response as any).$values || [];
        console.log('Unidades recebidas:', this.unidades);
      },
      error: (error) => {
        console.error('Erro ao listar unidades:', error);
      }
    });
  }
}
