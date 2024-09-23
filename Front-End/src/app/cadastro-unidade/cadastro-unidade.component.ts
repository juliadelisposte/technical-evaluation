import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-unidade',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.scss']
})
export class CadastroUnidadeComponent {
  usuarioForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      unitCode: ['', Validators.required],
      name: ['', Validators.required],
      isActive: [true],
    });
  }

  cadastrar() {
    if (this.usuarioForm.valid) {
      this.http.post('http://localhost:5105/api/unit', this.usuarioForm.value)
        .subscribe({
          next: (response) => {
            console.log('Unidade cadastrada com sucesso!', response);
            this.usuarioForm.reset();
          },
          error: (error) => {
            console.error('Erro ao cadastrar unidade', error);
          },
        });
    }
  }
}
