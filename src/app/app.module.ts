import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KrampouzListComponent } from './krampouz-container/krampouz-list/krampouz-list.component';
import { KrampouzDetailsComponent } from './krampouz-container/krampouz-details/krampouz-details.component';
import { KrampouzContainerComponent } from './krampouz-container/krampouz-container.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KrampouzListComponent,
    KrampouzDetailsComponent,
    KrampouzContainerComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
