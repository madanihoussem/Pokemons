import { Pokemon } from "./pokemon";

export class Evolution{
    id: number;
    origin: string;
    evolution: Pokemon;
    created: Date;
  
    constructor(){
      this.id = 0;
      this.origin = '';
      this.evolution = {
        id: 0,
        name: '',
        hp: 0,
        cp: 0,
        picture: '',
        types: [],
        rare: "*",
        created: new Date()
      };
      this.created = new Date();
    }
    
  }