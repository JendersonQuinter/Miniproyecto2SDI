import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservarComponent } from './components/reservar/reservar.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { ListaPeliculasComponent } from './pages/lista-peliculas/lista-peliculas.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaReservasComponent } from './pages/lista-reservas/lista-reservas.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-peliculas', component: ListaPeliculasComponent },
  { path: 'lista-reservas', component: ListaReservasComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'detalle-peliculas', component: DetallePeliculaComponent },
  { path: 'reservar', component: ReservarComponent },
  { path: 'lista-reservas', component: ListaReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
