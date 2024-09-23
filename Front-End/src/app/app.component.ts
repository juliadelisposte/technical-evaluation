import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListagemUsuariosComponent, CadastroUsuarioComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  goToCadastroUsuario() {
    this.router.navigate(['/cadastro-usuario']);
  }

  goToListagemUsuarios() {
    this.router.navigate(['/listagem-usuarios']);
  }

  goToCadastroColaborador() {
    this.router.navigate(['/cadastro-colaborador']);
  }

  goToListagemColaboradores() {
    this.router.navigate(['/listagem-colaboradores']);
  }

  goToCadastroUnidade() {
    this.router.navigate(['/cadastro-unidade']);
  }

  goToListagemUnidades() {
    this.router.navigate(['/listagem-unidades']);
  }
}



