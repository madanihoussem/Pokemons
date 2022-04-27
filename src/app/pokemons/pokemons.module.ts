import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { BorderCardDirective } from './directives/border-card.directive';
import { PokemonTypeColor } from './pipes/pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';

import { PokemonsService } from './pokemons.service';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonRareColor } from './pipes/pokemon-rarete-color.pipe';

@NgModule({
  declarations: [
    DetailPokemonComponent,
    NewPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    PokemonsComponent,
    BorderCardDirective,
    PokemonTypeColor,
    PokemonRareColor,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PokemonsService],
  bootstrap: []
})
export class PokemonsModule { }
