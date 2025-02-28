import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CritiqueService } from '../Service/critique.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(
    public attractionService: AttractionService,
    public critiqueService: CritiqueService
  ) {}

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction().pipe(
    map(attractions => attractions.filter(attraction => attraction.visible))
  );

  public critiques: { [key: number]: Observable<CritiqueInterface[]> } = {};

  loadCritiques(attractionId: number) {
    this.critiques[attractionId] = this.critiqueService.getCritiques(attractionId);
  }

  addCritique(attractionId: number, critique: CritiqueInterface) {
    this.critiqueService.postCritique(critique).subscribe(() => {
      this.loadCritiques(attractionId);
    });
  }
}