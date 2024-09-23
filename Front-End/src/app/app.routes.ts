import { Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';
import { ListagemColaboradoresComponent } from './listagem-colaboradores/listagem-colaboradores.component';
import { AtualizarColaboradorComponent } from './atualizar-colaborador/atualizar-colaborador.component';
import { CadastroUnidadeComponent } from './cadastro-unidade/cadastro-unidade.component';
import { AtualizarUnidadeComponent } from './atualizar-unidade/atualizar-unidade.component';
import { ListagemUnidadesComponent } from './listagem-unidades/listagem-unidades.component';

export const routes: Routes = [
  { path: '', redirectTo: '/listagem-usuarios', pathMatch: 'full' },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'listagem-usuarios', component: ListagemUsuariosComponent },
  { path: 'cadastro-colaborador', component: CadastroColaboradorComponent },
  { path: 'listagem-colaboradores', component: ListagemColaboradoresComponent },
  { path: 'atualizar-colaborador/:id', component: AtualizarColaboradorComponent },
  { path: 'cadastro-unidade', component: CadastroUnidadeComponent },
  { path: 'atualizar-unidade/:id', component: AtualizarUnidadeComponent },
  { path: 'listagem-unidades', component: ListagemUnidadesComponent },
];

