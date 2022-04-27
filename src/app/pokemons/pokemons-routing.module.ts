import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { NewPokemonComponent } from './new-pokemon/new-pokemon.component';

// const pokemonsRoutes: Routes = [
//   { path: 'pokemon/all', component : PokemonsComponent },
//   { path: 'pokemon/:id', component: DetailPokemonComponent},
//   { path: 'pokemon/edit/:id', component: EditPokemonComponent},
// ];

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    children:[
      { path: 'all', component : PokemonsComponent },
      { path: 'new', component : NewPokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent},
      { path: ':id', component: DetailPokemonComponent}, 
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
