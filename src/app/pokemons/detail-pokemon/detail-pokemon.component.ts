import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnee-pokemons/pokemon';
//import { POKEMONS } from '../donnee-pokemons/mock-pokemons';

import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { Evolution } from '../donnee-pokemons/evolution';
import { EVOLUTIONS } from '../donnee-pokemons/mock-evolutions';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit{

  //pokemons: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService){
    //this.pokemons = [];
  }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      let link = ['login'];
      this.router.navigate(link);
    }
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon );
 

  }

  goEdit(pokemon: Pokemon):void{
    let link = ['pokemon/edit', pokemon.id];
    this.router.navigate(link);
  }

  goBack(){
    this.router.navigate(['/pokemon/all']);
  }
  
  goEvoluer(pokemon:Pokemon){
    console.log(pokemon);
    for (let i = 0; i < EVOLUTIONS.length; i++) {
      const element = EVOLUTIONS[i];
      if (element.origin == pokemon.name) {
        this.pokemon = element.evolution;
        this.pokemonsService.updatePokemon(this.pokemon).subscribe(() => 'Modification validée');
        break;
      }
      
    }
    // this.pokemonsService.makeEvolution(pokemon).subscribe(pokemon => this.pokemon = pokemon );

  }

  delete(pokemon: Pokemon):void{
    this.pokemonsService.deletePokemon(pokemon).subscribe(() => this.goBack());
  }
}