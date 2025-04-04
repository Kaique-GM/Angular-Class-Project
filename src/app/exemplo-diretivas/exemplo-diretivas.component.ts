import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pessoa } from '../models/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exemplo-diretivas',
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretivas.component.html',
  styleUrl: './exemplo-diretivas.component.css'
})
export class ExemploDiretivasComponent {

  constructor(private route: Router){

  }
  
  exibirTabela: boolean = true;
  nome: string ="";
  

  pessoas: Pessoa[] = [
    {nome: 'João', id: 1, cidade: 'São Paulo', celular: '999999911'},
    {nome: 'José', id: 2, cidade: 'Sorocaba', celular: '999999922'},
    {nome: 'André', id: 3, cidade: 'Votorantim', celular: '999999933'},
  ]

  abrirDetalhes(id: number){
    this.route.navigate(['detalhe', id]);
  }

}
