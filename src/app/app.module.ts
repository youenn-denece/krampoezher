// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KrampouzListComponent } from './krampouz-container/krampouz-list/krampouz-list.component';
import { KrampouzDetailsComponent } from './krampouz-container/krampouz-details/krampouz-details.component';
import { KrampouzContainerComponent } from './krampouz-container/krampouz-container.component';
import { NgOptimizedImage } from '@angular/common';
import { SelectedDirective } from './shared/directives/selected.directive';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { IngredientListComponent } from './panier-container/ingredient-list/ingredient-list.component';

// routes
import { APP_ROUTES } from './app.routes';
import { KrampouzFormComponent } from './krampouz-container/krampouz-form/krampouz-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KrampouzListComponent,
    KrampouzDetailsComponent,
    KrampouzContainerComponent,
    SelectedDirective,
    PanierContainerComponent,
    IngredientListComponent,
    KrampouzFormComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
