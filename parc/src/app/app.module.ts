import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Modules Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  // pour matInput
import { MatButtonModule } from '@angular/material/button'; // pour mat-raised-button
import { MatLabel} from '@angular/material/form-field'; // pour mat-label

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,  // Importer MatFormFieldModule
    MatInputModule,      // Importer MatInputModule pour le champ de texte
    MatButtonModule,     // Importer MatButtonModule pour les boutons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
