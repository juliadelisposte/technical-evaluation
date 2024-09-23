import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-colaborador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastro-colaborador.component.html',
  styleUrls: ['./cadastro-colaborador.component.scss']
})
export class CadastroColaboradorComponent {
  name = '';
  unitId = '';
  userId = '';

  constructor(private http: HttpClient) {}

  cadastrar() {
    this.http.post('http://localhost:5105/api/Collaborator', {
      name: this.name,
      unitId: Number(this.unitId),
      userId: Number(this.userId) 
    }).subscribe(response => {
      console.log('Colaborador cadastrado', response);
    });
  }
}
