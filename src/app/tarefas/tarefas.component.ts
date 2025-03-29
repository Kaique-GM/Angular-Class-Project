import { Component } from '@angular/core';
import { Tarefas } from '../models/Tarefas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  descricao: string = "";
  concluida: boolean = true;

  tarefas: Tarefas[] = [
    { id: 1, descricao: 'Limpar Quarto', concluida: false },
    { id: 2, descricao: 'Comprar Ração', concluida: true },
    { id: 3, descricao: 'Comprar Leite', concluida: true },
    { id: 4, descricao: 'Tarefa de Web', concluida: false },
    { id: 5, descricao: 'Tarefa de StartUp', concluida: true }
  ]

  alterarStatus(tarefas: Tarefas) {
    tarefas.concluida = !tarefas.concluida;
  }
}
