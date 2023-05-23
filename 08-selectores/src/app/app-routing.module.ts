import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'selector', loadChildren: () => import('./countries/countries.module').then(response => response.CountriesModule) },
  { path: '**', redirectTo: 'selector' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
