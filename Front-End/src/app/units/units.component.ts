import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Unit } from '../models/Unit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  units: Unit[] = [];
  newUnit: Unit = { unitCode: '', name: '', isActive: true };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadUnits();
  }

  loadUnits() {
    this.apiService.getUnits().subscribe(units => {
      this.units = units;
    });
  }

  addUnit() {
    this.apiService.createUnit(this.newUnit).subscribe(() => {
      this.loadUnits();
      this.newUnit = { unitCode: '', name: '', isActive: true }; // Reset form
    });
  }
}
