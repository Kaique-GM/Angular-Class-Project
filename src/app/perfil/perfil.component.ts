import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../services/localStorageServices';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router, private service: StorageService){

  }

  email: string = '';

  ngOnInit(): void {
    if(this.service.getLocal !== null){
      this.email = this.route.snapshot.params['email']
    }else{
      this.router.navigate(['login']);
    }
  }

  logout(){
    this.service.removeLocal('login')
    this.router.navigate(['login']);

  }
}
