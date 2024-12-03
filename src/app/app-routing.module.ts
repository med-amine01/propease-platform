import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'property',
    loadChildren: () => import('./feature-modules/property/property.module').then(m => m.PropertyModule),
  },
  {
    path: 'reservation',
    loadChildren: () => import('./feature-modules/reservation/reservation.module').then(m => m.ReservationModule),
  },
  { path: '', redirectTo: '/property', pathMatch: 'full' },
  { path: '**', redirectTo: '/property' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
