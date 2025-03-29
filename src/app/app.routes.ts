import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { IMCComponent } from './imc/imc.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { TarefasComponent } from './tarefas/tarefas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'media-simples', component: MediaSimplesComponent },
    { path: 'apolice', component: ApoliceComponent },
    { path: 'conversor', component: ConversorTemperaturaComponent },
    { path: 'imc', component: IMCComponent },

    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component },
            { path: 'tela-filho2', component: TelaFilho2Component },

        ]
    },

    { path: 'exemplo-diretivas', component: ExemploDiretivasComponent },
    { path: 'tarefas', component: TarefasComponent},

    { path: '**', component: PaginaNaoEncontradaComponent }
];
