import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { IMCComponent } from './imc/imc.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { AnotacaoComponent } from './anotacao/anotacao.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'media-simples', component: MediaSimplesComponent },
    { path: 'apolice', component: ApoliceComponent },
    { path: 'conversor', component: ConversorTemperaturaComponent },
    { path: 'imc', component: IMCComponent },
    { path: 'exemplo-diretivas', component: ExemploDiretivasComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: 'detalhe/:id', component: DetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil/:email', component: PerfilComponent },
    { path: 'cadastro', component: CadastroUsuarioComponent },
    { path: 'pessoa', component: CadastroPessoaComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produtoDetalhe/:id', component:ProdutoDetalheComponent },
    { path: 'anotacao', component:AnotacaoComponent },


    { path: '**', component: PaginaNaoEncontradaComponent }
];
