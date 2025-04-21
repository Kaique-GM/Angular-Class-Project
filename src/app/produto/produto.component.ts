import { Component } from '@angular/core';
import { produto } from '../models/produto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-produto',
  imports: [CommonModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  constructor(private route: Router, private service: StorageService){

  }

  produtos: produto[] = [
    {id: 1, nome: 'Batata', preco:'R$10,00', descricao: 'Batata Fresquinha', emEstoque: true, status: ''},
    {id: 2, nome: 'Cenoura', preco:'R$5,00', descricao: 'Cenoura Fresquinha', emEstoque: false, status: '' },
    {id: 3, nome: 'Leite', preco:'R$50,00', descricao: 'Leite Quente', emEstoque: true, status: ''},
    {id: 4, nome: 'Coca-Cola', preco:'R$10,00', descricao: 'Coca-Geladinha', emEstoque: false, status: ''},
    {id: 5, nome: 'Dolly', preco:'R$1,00', descricao: 'Tome por sua conta e risco', emEstoque: true, status: '' },

  ]

  comprar(produto: produto){
    if(produto.emEstoque === true){
      this.route.navigate(['produtoDetalhe', produto.id]);
      let dados = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        descricao: produto.descricao,
        emEstoque: produto.emEstoque,
      }
      this.service.setLocal('dados', dados);
    }else{
      produto.status = ' Nenhum produto disponível no momento'
    }

  }
}