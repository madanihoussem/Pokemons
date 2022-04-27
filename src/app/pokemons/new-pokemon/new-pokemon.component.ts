import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from "../donnee-pokemons/mock-pokemons";
import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'new-pokemon',
  templateUrl: './new-pokemon.component.html',
})
export class NewPokemonComponent implements OnInit{
  types: any = [];
  table: any = [];
  @Input() pokemon : any;

  form = this.formBuilder.group({
    id: null,
    name: "",
    hp: null,
    cp: null,
    picture: "",
    types: [],
    rare: '',
    created: new Date()
  });

  constructor(private router: Router, private pokemonService: PokemonsService, private formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type:string):boolean{
    let index = this.table.indexOf(type);
    return(index > -1);
  }
  //Méthode appelée lorque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void{
    let checked = $event.target.checked;
    
    if(checked){
      this.table.push(type);
    }else{
      let index = this.table.indexOf(type);
      if(index > -1){
        this.table.splice(index, 1);
      }
    }
    this.form.value.types = this.table;
  }
  // Valide le nombre de types pour chaque pokémon
  isTypesValid(type: string): boolean
  {
    if(this.table.length === 1 && this.hasType(type)){
      return false;
    }
    if(this.table.length >= 3 && !this.hasType(type)){
      return false;
    }
    return true;
  }

  onSubmit():void{
    let lastId =  POKEMONS.slice(-1)[0].id;
    this.form.value.id = lastId+1;
    this.pokemonService.createPokemon(this.form.value).subscribe(() => 'Modification validée');
    let link = ['pokemon/all'];
    this.router.navigate(link);
  }

  goBack():void{
    let link = ['pokemon/all'];
    this.router.navigate(link);
  }

}