import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {

  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valor: number = 0;
  valorApolice: number =0;

  calcularApolice(){
    if (this.sexo === 'Masculino' && this.idade <= 25){
      this.valorApolice = this.valor * 0.15; 
    } else if (this.sexo === 'Masculino' && this.idade > 25){
      this.valorApolice = this.valor * 0.10;
    } else if (this.sexo === 'Feminino'){
      this.valorApolice = this.valor * 0.08;
    }
  }
}
