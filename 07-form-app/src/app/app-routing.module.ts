import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(response => response.ReactiveModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(response => response.AuthModule) },
  { path: '**', redirectTo: 'reactive' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
