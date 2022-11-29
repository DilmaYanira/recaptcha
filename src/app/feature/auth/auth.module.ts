import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AuthRoutingModule } from './auth.routing.module';
import { ContenedorAuthComponent } from './components/contenedor-auth/contenedor-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AuthService } from './shared/service/auth.service';


@NgModule({
  declarations: [
    ContenedorAuthComponent,
    LoginComponent,
    RegistrarComponent
  ],
  providers: [ AuthService ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
})
export class AuthModule { }
