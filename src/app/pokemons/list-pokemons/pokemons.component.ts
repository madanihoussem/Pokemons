import { Component, OnInit } from "@angular/core";

import { Pokemon } from '../donnee-pokemons/pokemon';
// importation d'angular le router pour les liens
import { Router } from '@angular/router';
import { PokemonsService } from "../pokemons.service";
import { Subject } from "rxjs";
import { POKEMONS } from "../donnee-pokemons/mock-pokemons";


@Component({
  selector: 'list-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent implements OnInit {

  searchTerms:any = [];
  pokemons: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonsService){
    this.pokemons = [];
  }

  ngOnInit():void{
    if(localStorage.getItem('user') == null){
      let link = ['login'];
      this.router.navigate(link);
    }
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  goNew(){
    let link = ['pokemon/new'];
    this.router.navigate(link);
  }

  deconnexion(){
    localStorage.removeItem('user');
    let link = ['login'];
    this.router.navigate(link);
  }
  search(value:string){
    for (let i = 0; i < POKEMONS.length; i++) {
      const element = POKEMONS[i];
      let nom = element.name.toLowerCase();
      if (value == '') {
        this.searchTerms = [];
      }
      else{
        if (nom.includes(value)) {
          let index = this.searchTerms.indexOf(element);
          if(index < 0){
            this.searchTerms.push(element);
          }
          else{
            console.log(index);
          }
        }
        else{
          let index = this.searchTerms.indexOf(element);
          if(index > -1){
            this.searchTerms.splice(index, 1);
          }
        }
      }
    }
  }

}