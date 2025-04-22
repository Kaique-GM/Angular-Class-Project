import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-anotacao',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './anotacao.component.html',
  styleUrl: './anotacao.component.css'
})
export class AnotacaoComponent {

  constructor(private router: Router) { }

  mediaSimples() {
    this.router.navigate(['media-simples']);
  }
  calculadora() {
    this.router.navigate(['calculadora']);
  }
  diretivas1() {
    this.router.navigate(['exemplo-diretivas']);
  }
  cadastros1() {
    this.router.navigate(['cadastro']);
  }

  cadastros2() {
    this.router.navigate(['pessoa']);
  }
  home() {
    this.router.navigate(['home']);
  }
  sobre() {
    this.router.navigate(['sobre']);
  }
  produto() {
    this.router.navigate(['produto']);
  }
}
