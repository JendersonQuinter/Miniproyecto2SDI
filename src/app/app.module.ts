import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

// Importaciones de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Importación del Ambiente
import { environment } from 'src/environments/environment';
// Componentes
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaPeliculasComponent } from './pages/lista-peliculas/lista-peliculas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { PeliculasInicioComponent } from './components/peliculas-inicio/peliculas-inicio.component';
import { ListaReservasComponent } from './pages/lista-reservas/lista-reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaPeliculasComponent,
    NavbarComponent,
    FooterComponent,
    PeliculaComponent,
    ReservarComponent,
    FavoritosComponent,
    FavoritoComponent,
    PeliculasInicioComponent,
    ListaReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
