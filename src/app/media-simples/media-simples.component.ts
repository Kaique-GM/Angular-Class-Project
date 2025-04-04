import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../services/localStorageServices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-simples',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media-simples.component.html',
  styleUrl: './media-simples.component.css'
})
export class MediaSimplesComponent implements OnInit {

  constructor(private service: StorageService) {

  }
  ngOnInit(): void {
    this.ultimaMedia = this.service.getLocal('ultimaMedia');
  }

  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  media: number = 0;
  situacao: string = '';
  ultimaMedia: any = null;

  calcularMedia() {
    this.media = ((this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45));
    if (this.media >= 5)
      this.situacao = 'Aprovado';
    else
      this.situacao = 'Reprovado';
    let dados = {
      nota1: this.ac1,
      nota2: this.ac2,
      nota3: this.ag,
      nota4: this.af,
      media: this.media,
      situacao: this.situacao
    };
    this.service.setLocal('ultimaMedia', dados);
  }
}