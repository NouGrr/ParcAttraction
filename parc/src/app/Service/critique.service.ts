import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CritiqueInterface } from '../Interface/critique.interface';

@Injectable({
  providedIn: 'root',
})
export class CritiqueService {
  constructor(private dataService: DataService) {}

  public getCritiques(attractionId: number): Observable<CritiqueInterface[]> {
    const url = `http://127.0.0.1:5000/attraction/${attractionId}/critiques`;
    return this.dataService.getData(url) as Observable<CritiqueInterface[]>;
  }

  public postCritique(critique: CritiqueInterface): Observable<CritiqueInterface> {
    const url = `http://127.0.0.1:5000/attraction/${critique.attractionId}/critiques`;
    return this.dataService.postData(url, critique) as Observable<CritiqueInterface>;
  }
}