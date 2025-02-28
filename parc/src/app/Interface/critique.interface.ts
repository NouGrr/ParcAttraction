export interface CritiqueInterface {
  addAvis(newAvis: CritiqueInterface): unknown;
  getAvisByAttractionId(id: number): import("rxjs").Observable<CritiqueInterface[]>;
  getAllAvis(): import("rxjs").Observable<CritiqueInterface[]>;
  critique_id: number,
  nom: string | null,
  prenom: string | null,
  note: number,
  commentaire: string,
  attraction_id: number,
}