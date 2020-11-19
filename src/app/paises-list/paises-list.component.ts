import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../paises.service';
import { MatDialog } from '@angular/material/dialog';
import { PaisFichaComponent } from '../pais-ficha/pais-ficha.component';
import { RegionalBlocs } from '../shared/regionalBlocs';

@Component({
  selector: 'app-paises-list',
  templateUrl: './paises-list.component.html',
  styleUrls: ['./paises-list.component.css']
})
export class PaisesListComponent implements OnInit {

  @Output() lasRegiones = new EventEmitter();
  //@Output() lasSubRegiones = new EventEmitter();
  @Output() losRegionalBlocs = new EventEmitter();

  regiones: Array<string>;
  //subRegiones: Array<string>;
  regionalBlocs: Array<RegionalBlocs>;

  constructor(public paises: PaisesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.paises.obtenerPaises()
    .then(() => {
      this.regiones = this.calcRegiones();
      //this.subRegiones = [];
      this.regionalBlocs = this.calcRegionalBlocs();
      this.lasRegiones.emit(this.regiones);
      //this.lasSubRegiones.emit(this.subRegiones);
      this.losRegionalBlocs.emit(this.regionalBlocs);
    });
  }

  seleccionar(pais) {
    const dialogo = this.dialog.open(PaisFichaComponent, {data: pais});
  }

  calcRegiones(): Array<string> {
    const regiones: Array<string> = [];
    regiones.push('Todas');
    this.paises.selCountries.forEach(pais => {
      if (regiones.indexOf(pais.region) === -1) {
        regiones.push(pais.region);
      }
    });
    return regiones;
  }

  calcRegionalBlocs(): Array<RegionalBlocs> {
    const regionalBlocs: Array<RegionalBlocs> = [];
    regionalBlocs.push({acronym: '', name: 'Todos'});
    this.paises.selCountries.forEach(pais => {
      if (pais.regionalBlocs.length > 0) {
        if (pais.regionalBlocs.length === 1) {
          // Solo existe uno y es un objeto
          if (buscarElemento({acronym: pais.regionalBlocs[0].acronym, name: pais.regionalBlocs[0].name})) {
            regionalBlocs.push({acronym: pais.regionalBlocs[0].acronym, name: pais.regionalBlocs[0].name});}
        } else {
          // hay mas de uno y es un array de objetos
          pais.regionalBlocs.forEach((bloq) => {
            if (buscarElemento({acronym: bloq.acronym, name: bloq.name})) {
              regionalBlocs.push({acronym: bloq.acronym, name: bloq.name});
            }
          });
        }
      }
    });
    return regionalBlocs;

    function buscarElemento(obj: RegionalBlocs): boolean {
      let ret = false;
      const result = regionalBlocs.findIndex((elem: RegionalBlocs) => {
        return elem.acronym === obj.acronym && elem.name === obj.name; });
      if (result === -1) { ret = true; }
      return ret;
    }
  }

}
