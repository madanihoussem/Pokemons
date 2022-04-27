import { Pipe, PipeTransform } from '@angular/core';

/*
* Affiche la couleur correspondant à la rareté du pokémon.
* Prend en argument le type du pokémon.
* Exemple d'utilisation:
*     {{ pokemon.rare | pokemonRareColor }}
*/

@Pipe({ name: 'pokemonRareColor' })
export class PokemonRareColor implements PipeTransform {
  transform(rare: string): string {
    let color: string;

    switch(rare){
      case '*':
        color = 'red lighten-1';
        break;
      case '**':
        color = 'blue lighten-1';
        break;
      case '***':
        color = 'green lighten-1';
        break;
      case '****':
        color = 'brown lighten-1';
        break;
      case '*****':
        color = 'grey lighten-3';
        break;
      default:
        color = 'grey';
        break; 
    }
    return 'chip ' +  color;

  }
}