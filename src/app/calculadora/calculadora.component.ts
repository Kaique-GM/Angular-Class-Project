import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  num1: number = 0;
  num2: number = 0;
  operacao: string = 'Somar';
  resultado: number = 0;

  calcularResultado() {
    if (this.operacao === 'Somar') {
      this.resultado = this.num1 + this.num2
    } else if (this.operacao === 'Subtrair') {
      this.resultado = this.num1 - this.num2
    } else if (this.operacao === 'Multiplicar') {
      this.resultado = this.num1 * this.num2
    } else if (this.operacao === 'Dividir') {
      if (this.num2 !== 0) {
        this.resultado = this.num1 / this.num2;
      } else {
        this.resultado = NaN;
      }

    }
  }
}