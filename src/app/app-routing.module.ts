import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'property-list',
    loadChildren: () => import('./feature-modules/property-list/property-list.module').then(m => m.PropertyListModule),
  },
  { path: '', redirectTo: '/property-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/property-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
