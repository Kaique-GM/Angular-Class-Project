import { Component, OnInit } from '@angular/core';
import { produto } from '../models/produto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StorageService } from '../services/localStorage';
import { ProdutoService } from '../produto/services/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto',
  imports: [CommonModule, FormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  produtos: any = [];

  nome: string = '';
  valor: number = 0;
  id: number = 0;
  temEstoque: boolean = false;


  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.obterProduto();
  }

  obterProduto() {
    this.produtoService.obterTodos().subscribe((data: any) => {
      this.produtos = data;
      console.log(this.produtos)
    })
  }

  inserir() {
    let produto = {
      nome: this.nome,
      valor: this.valor,
      temEstoque: this.temEstoque,
    }

    this.produtoService.inserir(produto).subscribe(
      response => {
        this.produtoService.obterTodos().subscribe((data: any) => {
          this.produtos = data;
        })
      },
    );
  }

  deletar(id: any) {
    this.produtoService.deletar(id).subscribe(
      response => {
        this.produtoService.obterTodos().subscribe((data: any) => {
          this.produtos = data;
        })
      },
    );
  }


  // constructor(private route: Router, private service: StorageService){

  // }

  // produtos: produto[] = [
  //   {id: 1, nome: 'Batata', preco:'R$10,00', descricao: 'Batata Fresquinha', emEstoque: true, status: ''},
  //   {id: 2, nome: 'Cenoura', preco:'R$5,00', descricao: 'Cenoura Fresquinha', emEstoque: false, status: '' },
  //   {id: 3, nome: 'Leite', preco:'R$50,00', descricao: 'Leite Quente', emEstoque: true, status: ''},
  //   {id: 4, nome: 'Coca-Cola', preco:'R$10,00', descricao: 'Coca-Geladinha', emEstoque: false, status: ''},
  //   {id: 5, nome: 'Dolly', preco:'R$1,00', descricao: 'Tome por sua conta e risco', emEstoque: true, status: '' },

  // ]

  // comprar(produto: produto){
  //   if(produto.emEstoque === true){
  //     this.route.navigate(['produtoDetalhe', produto.id]);
  //     let dados = {
  //       id: produto.id,
  //       nome: produto.nome,
  //       preco: produto.preco,
  //       descricao: produto.descricao,
  //       emEstoque: produto.emEstoque,
  //     }
  //     this.service.setLocal('dados', dados);
  //   }else{
  //     produto.status = ' Nenhum produto disponível no momento'
  //   }

  // }
}