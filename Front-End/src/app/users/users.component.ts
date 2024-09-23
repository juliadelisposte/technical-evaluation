import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule, FormsModule] // Adicione esta linha
})
export class UsersComponent {
  users: User[] = [];
  newUser: User = { login: '', password: '', isActive: true };
  isActive: boolean | undefined; // Definindo a variável corretamente
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers() {
      this.apiService.getUsers(this.isActive).subscribe(
        users => {
          this.users = users;
        },
        error => {
          console.error('Erro ao carregar usuários:', error);
        }
      );
    }

  addUser() {
    this.apiService.createUser(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { login: '', password: '', isActive: true }; // Reset form
    });
  }
}
