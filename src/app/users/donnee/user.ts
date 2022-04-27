export class User{
  id: number;
  email: string;
  password: string;
  created: Date;

  constructor(){
    this.id = 0;
    this.email = '';
    this.password = '';
    this.created = new Date();
  }
  
}