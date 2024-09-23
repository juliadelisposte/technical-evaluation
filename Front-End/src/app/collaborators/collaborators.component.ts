import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Collaborator } from '../models/Collaborator';
import { Unit } from '../models/Unit';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collaborators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  collaborators: Collaborator[] = [];
  newCollaborator: Collaborator = { name: '', unitId: 0, userId: 0 };
  units$: Observable<Unit[]>;

  constructor(private apiService: ApiService) {
    this.units$ = this.apiService.getUnits(); // Obtendo unidades
  }

  ngOnInit(): void {
    this.loadCollaborators();
  }

  loadCollaborators() {
    this.apiService.getCollaborators().subscribe(collaborators => {
      this.collaborators = collaborators;
    });
  }

  addCollaborator() {
    this.apiService.createCollaborator(this.newCollaborator).subscribe(() => {
      this.loadCollaborators();
      this.newCollaborator = { name: '', unitId: 0, userId: 0 }; // Reset form
    });
  }
}
