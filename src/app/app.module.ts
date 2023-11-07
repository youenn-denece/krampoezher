// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgOptimizedImage } from '@angular/common';
// routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
   
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
