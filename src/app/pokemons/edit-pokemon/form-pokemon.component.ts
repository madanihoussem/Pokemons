import { Component, OnInit, Input  } from "@angular/core";

import { Pokemon } from "../donnee-pokemons/pokemon";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'form-pokemon',
  templateUrl: './form-pokemon.component.html',
})
export class FormPokemonComponent implements OnInit{

  types: any = [];
  @Input() pokemon : any;

  constructor(private router: Router, private pokemonService: PokemonsService){

  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type:string):boolean{
    let index = this.pokemon.types.indexOf(type);
    return(index > -1);
  }
  //Méthode appelée lorque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void{
    let checked = $event.target.checked;
    
    if(checked){
      this.pokemon.types.push(type);
    }else{
      let index = this.pokemon.types.indexOf(type);
      if(index > -1){
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  // Valide le nombre de types pour chaque pokémon
  isTypesValid(type: string): boolean
  {
    if(this.pokemon.types.length === 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit():void{

    this.pokemonService.updatePokemon(this.pokemon).subscribe(() => 'Modification validée');
    let link = ['pokemon/', this.pokemon.id];
    this.router.navigate(link);
  }

  goBack(pokemon: Pokemon):void{
    let link = ['pokemon/', pokemon.id];
    this.router.navigate(link);
  }

}