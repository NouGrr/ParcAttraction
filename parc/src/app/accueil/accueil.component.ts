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
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule, MatLabel, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  nouvelleCritique: any;

  constructor(
    public attractionService: AttractionService,
    public critiqueService: CritiqueService
  ) {}

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction().pipe(
    map(attractions => attractions.filter(attraction => attraction.visible))
  );

  critiques: { [key: string]: Observable<CritiqueInterface[]> } = {};

  loadCritiques(attractionId: number) {
    this.critiques[attractionId] = this.critiqueService.getCritiques(attractionId);
  }

  addCritique(attractionId: number | null, form: any) {
    if (form.valid && attractionId !== null) {
      this.nouvelleCritique.attraction_id = attractionId;
      this.critiqueService.postCritique(this.nouvelleCritique).subscribe(() => {
        console.log('Critique ajoutée');
        this.loadCritiques(attractionId);
        form.resetForm(); // Réinitialise le formulaire
      });
    } else {
      console.log("Attraction ID manquant ou formulaire invalide");
    }
  }
}