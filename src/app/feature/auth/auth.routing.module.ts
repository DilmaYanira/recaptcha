import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorAuthComponent } from './components/contenedor-auth/contenedor-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registrar',
        component: RegistrarComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
