import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborator } from '../models/Collaborator';
import { User } from '../models/User';
import { Unit } from '../models/Unit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5105/api';

  constructor(private http: HttpClient) {}

  // Usuários
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/user`, user);
  }

  getUsers(isActive?: boolean): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/user?isActive=${isActive}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/user/${id}`, user);
  }

  // Colaboradores
  createCollaborator(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(`${this.baseUrl}/collaborator`, collaborator);
  }

  getCollaborators(): Observable<Collaborator[]> {
    return this.http.get<Collaborator[]>(`${this.baseUrl}/collaborator`);
  }

  updateCollaborator(id: number, collaborator: Collaborator): Observable<Collaborator> {
    return this.http.put<Collaborator>(`${this.baseUrl}/collaborator/${id}`, collaborator);
  }

  deleteCollaborator(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/collaborator/${id}`);
  }

  // Unidades
  createUnit(unit: Unit): Observable<Unit> {
    return this.http.post<Unit>(`${this.baseUrl}/unit`, unit);
  }

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.baseUrl}/unit`);
  }

  updateUnit(id: number, unit: Unit): Observable<Unit> {
    return this.http.put<Unit>(`${this.baseUrl}/unit/${id}`, unit);
  }
}
