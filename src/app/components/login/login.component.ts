import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    // public auth: AuthService,
    private fb: FormBuilder, 
    private router: Router) {
      this.form = this.fb.group({
        usuario:['',Validators.required],
        password:['',Validators.required]
      })
    }

  ngOnInit(): void {
    //  this.auth.isAuthenticated$.subscribe(isAuthenticated =>{
    //    if(isAuthenticated){
    //      this.router.navigate(['/list'])
    //    }
    //  })
  }

  register(){
    this.router.navigate(['add'])
  }

  ingresar(){
    console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
      if (usuario == 'admin' && password == 'admin123') {
        this.router.navigate(['list'])
      }else{

      }

  }

}
