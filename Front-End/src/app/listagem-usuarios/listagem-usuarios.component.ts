import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-listagem-usuarios',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('ngOnInit chamado');
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.http.get('http://localhost:5105/api/user').subscribe({
      next: (response) => {
        this.usuarios = (response as any).$values;
        console.log('Usuários recebidos:', this.usuarios);
      },
      error: (error) => {
        console.error('Erro ao listar usuários:', error);
      }
    });
  }
}
