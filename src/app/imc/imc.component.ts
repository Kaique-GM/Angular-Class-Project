import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class IMCComponent {

  peso: number = 0;
  altura: number = 0;
  situacao: string = '';
  imc: number = 0;

  calcularIMC() {
    this.imc = this.peso /  (this.altura * this.altura);

    if (this.imc <= 18.5) {
      this.situacao = 'Abaixo do peso'
    }
    else if (this.imc >= 18.5 && this.imc <= 24.9) {
      this.situacao = 'Peso normal'
    }
    else if (this.imc >= 25 && this.imc <= 29.9) {
      this.situacao = 'Sobrepeso'
    }
    else if (this.imc >= 30 && this.imc <= 34.9) {
      this.situacao = 'Obesidade grau I'
    }
    else if (this.imc >= 35 && this.imc <= 39.9) {
      this.situacao = 'Obesidade grau II'
    }
    else if (this.imc >= 40) {
      this.situacao = 'Obesidade grau III'
    }

  }
}
