import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  usuarioForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      isActive: [true], // Por padrão, ativa
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      this.http.post('http://localhost:5105/api/user', this.usuarioForm.value)
        .subscribe({
          next: (response) => {
            console.log('Usuário cadastrado com sucesso!', response);
          },
          error: (error) => {
            console.error('Erro ao cadastrar usuário', error);
          },
        });
    }
  }
}

