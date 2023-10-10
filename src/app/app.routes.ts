import { Routes } from "@angular/router";
import { KrampouzContainerComponent } from "./krampouz-container/krampouz-container.component";
import { PanierContainerComponent } from "./panier-container/panier-container.component";
import { KrampouzDetailsComponent } from "./krampouz-container/krampouz-details/krampouz-details.component";
import { KrampouzFormComponent } from "./krampouz-container/krampouz-form/krampouz-form.component";

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'krampouzs', pathMatch:'full'},
    {
        path: 'krampouzs', component: KrampouzContainerComponent,
        children: [
            { path: 'new', component: KrampouzFormComponent },
            { path: ':index/edit', component: KrampouzFormComponent },
            { path: ':index', component: KrampouzDetailsComponent },
            { path: '', redirectTo:'0', pathMatch: 'full' },
        ]
    },
    {path: 'panier', component: PanierContainerComponent},
]