import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaisesListComponent } from './paises-list/paises-list.component';
import { PaisFichaComponent } from './pais-ficha/pais-ficha.component';

//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
//import { MatIconModule } from '@angular/material/icon';
//import { MatDividerModule } from '@angular/material/divider';
//import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MilesPipe } from './miles.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PaisesListComponent,
    PaisFichaComponent,
    MilesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  //  FormsModule,
    MatDialogModule,
  //  ReactiveFormsModule,
    MatButtonModule,
  //  MatIconModule,
  //  MatDividerModule,
  //  MatCardModule,
      MatFormFieldModule,
  //  MatInputModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
