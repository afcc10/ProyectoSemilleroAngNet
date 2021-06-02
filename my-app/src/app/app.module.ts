import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './auth/login.module';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { GeneroPipe } from './pipes/genero.pipe';
import { PrefijoPipe } from './pipes/prefijo.pipe';
import { FiltroUsuariosComponent } from './pages/filtro-usuarios/filtro-usuarios.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListaUsuariosComponent,
    GeneroPipe,
    PrefijoPipe,
    FiltroUsuariosComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
