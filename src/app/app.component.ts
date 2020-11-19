import { Component } from '@angular/core';
import { PaisesService } from './paises.service';
import { RegionalBlocs } from './shared/regionalBlocs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Paises';
  regiones: Array<string>;
  subRegiones: Array<string>;
  regSeleccionada: string;
  subRegSeleccionada: string;
  regionalBlocs: Array<RegionalBlocs>;
  regBlocSeleccionado: RegionalBlocs;

  constructor(public paises: PaisesService) {}

  // EventEmitters
  cargaRegiones(event: Array<string>) {
    this.regiones = event;
    this.subRegiones = [];
  }

  cargaRegionalBlocs(event: Array<RegionalBlocs>) {
    this.regionalBlocs = event;
  }

  // SelectionChange
  changeSelectR(reg: string) {
    this.regSeleccionada = reg;
  }

  changeSelectSR(subReg: string) {
    this.subRegSeleccionada = subReg;
  }

  changeSelectRB(regB: RegionalBlocs) {
    this.regBlocSeleccionado = regB;
  }

  // Accion de volver a obtener los paises de la selección
  seleccionarRegion() {
    this.subRegiones = null;
    if (this.regSeleccionada === 'Todas') {
      this.paises.obtenerPaises();
    } else {
      this.paises.obtenerSelPaises(this.regSeleccionada)
      .then(() => {
        if (this.regSeleccionada !== 'Todas') {
          this.subRegiones = this.calcSubRegiones(this.regSeleccionada);
        }
      });
    }
  }

  seleccionarSubRegion() {
    this.paises.obtenerSelPaises(this.regSeleccionada)
    .then(() => {
      this.paises.filtrarSelPaises(this.subRegSeleccionada); }
    );
  }

  seleccionarRegionalBloc() {
    this.paises.obtenerSelPaisesRB(this.regBlocSeleccionado);
  }

  // -----------------------------------------------------------
  calcSubRegiones(region: string) {
    const subRegiones: Array<string> = [];
    if (region !== '') {
      this.paises.selCountries.forEach(pais => {
        if (pais.region === region) {
          if (pais.subregion !== '') {
            if (subRegiones.indexOf(pais.subregion) === -1) {
              subRegiones.push(pais.subregion);
            }
          }
        }
      });
    }
    return subRegiones;
  }
}
