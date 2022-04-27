import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../donnee-pokemons/pokemon";
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit{

  pokemons: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService){
    this.pokemons= [];
  }

  ngOnInit(): void {
    if(localStorage.getItem('user') == null){
      let link = ['login'];
      this.router.navigate(link);
    }
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon );

    
  }

}