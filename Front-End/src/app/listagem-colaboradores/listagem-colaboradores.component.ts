import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Collaborator {
  id: number;
  name: string;
  unitId: string | number;
  unitName: string;
}

@Component({
  selector: 'app-listagem-colaboradores',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listagem-colaboradores.component.html',
  styleUrls: ['./listagem-colaboradores.component.scss']
})
export class ListagemColaboradoresComponent implements OnInit {
  colaboradores: Collaborator[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.listarColaboradores();
  }

  listarColaboradores() {
    this.http.get('http://localhost:5105/api/Collaborator').subscribe({
      next: (response: any) => {
        const values = response.$values || [];
        this.colaboradores = this.extractAllCollaborators(values);
        console.log('Colaboradores recebidos:', this.colaboradores);
      },
      error: (error) => {
        console.error('Erro ao listar colaboradores:', error);
      }
    });
  }

  extractAllCollaborators(values: any[]): Collaborator[] {
    const collaborators: Collaborator[] = [];
    const extractCollaborators = (items: any[]) => {
      items.forEach(item => {
        if (item && item.hasOwnProperty('id') && item.hasOwnProperty('name') && !collaborators.some(c => c.id === item.id)) {
          collaborators.push({
            id: item.id,
            name: item.name,
            unitId: item.unit?.unitCode ?? item.unitId,
            unitName: item.unit?.name ?? 'N/A'
          });
          if (item.unit?.collaborators?.$values) {
            extractCollaborators(item.unit.collaborators.$values);
          }
        }
      });
    };

    extractCollaborators(values);
    return collaborators;
  }
}
