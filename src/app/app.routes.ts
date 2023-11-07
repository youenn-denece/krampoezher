import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'krampouzs', pathMatch:'full' },
    { path: 'krampouzs', loadChildren: () => import('./features/krampouz/krampouz.module').then( m => m.KrampouzModule ) }, 
    { path: 'panier', loadChildren: () => import('./features/panier/panier.module').then( m => m.PanierModule ) }
]