import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { USERS } from '../donnee/mock-user';
import { User } from '../donnee/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  private usersUrl = 'api/users';

  user:any = '';

  @Input() users : any;

  form = this.formBuilder.group({
    id: null,
    email: '',
    password: '',
    created: new Date()
  });
  constructor(private router: Router, private formBuilder: FormBuilder) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null){
      let link = ['pokemon/all'];
      this.router.navigate(link);
    }
  }
  onSubmit(){
    for (let i = 0; i < USERS.length; i++) {
      if (this.form.value.email === USERS[i].email && this.form.value.password === USERS[i].password) {
        this.user = USERS[i]
        localStorage.setItem('user', this.user.email);
        let link = ['pokemon/all'];
        this.router.navigate(link);
        break;
      }
      else{
        this.user = null;
      }
    }
  }

}
