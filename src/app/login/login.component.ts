import { Component } from '@angular/core';
import { StorageService } from '../services/localStorageServices';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service: StorageService, private route: Router) {

  }

  email: string = '';
  senha: string = '';

  login(email: string) {
    if (this.email === 'admin@exemplo.com' && this.senha === '1234') {
      let dados = {
        email: this.email,
        senha: this.senha
      }
      this.service.setLocal('login', dados);
      this.route.navigate(['perfil', email]);
    }
  }
}
