import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/localStorage';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent implements OnInit{

  id: number = 0;
  nome: string = '';
  preco: string = '';
  descricao: string = '';
  emEstoque: boolean= true;

    constructor(private route: ActivatedRoute, private service: StorageService) {
  
    }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'] ?? 0;

      const dados = this.service.getLocal('dados');

      this.nome = dados.nome;
      this.preco = dados.preco;
      this.descricao = dados.descricao;
      this.emEstoque = dados.emEstoque;
      
    }
}
