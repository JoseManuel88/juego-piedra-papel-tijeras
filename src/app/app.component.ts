import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  jugando: Boolean = false;

  resultado = false;

  victoria = false;

  posibilidades = ['Piedra', 'Papel', 'Tijeras'];

  jugadaAleatoria: String = '';

  jugadaElegida: String = '';

  resultadoCompeticion: String = '';

  constructor() {
  }

  jugar() {
    this.jugando = true;
    console.log(this.posibilidades[this.getRandomInt()]);
  }

  elegir(escogido: String) {
    this.jugadaElegida = escogido;
    this.jugadaAleatoria = this.posibilidades[this.getRandomInt()];
    console.log(this.jugadaAleatoria);
    this.resultado = true;
    this.jugando = false;

    if (escogido === 'Piedra'
    && this.jugadaAleatoria === 'Tijeras') {
      this.resultadoCompeticion = 'Victoria!';
    } else if (escogido === 'Papel'
    && this.jugadaAleatoria === 'Piedra') {
      this.resultadoCompeticion = 'Victoria!';
    } else if (escogido === 'Tijeras'
    && this.jugadaAleatoria === 'Papel') {
      this.resultadoCompeticion = 'Victoria!';
    }
     else if (escogido === this.jugadaAleatoria) {
      this.resultadoCompeticion = 'Empate!';
    }
    else {
      this.resultadoCompeticion = 'Derrota!';
    }
  }

  getRandomInt() {
    return Math.floor(Math.random() * this.posibilidades.length);
  }
}
