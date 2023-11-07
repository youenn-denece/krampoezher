// Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/modules/shared.module';
// Composants
import { KrampouzContainerComponent } from './krampouz-container/krampouz-container.component';
import { KrampouzDetailsComponent } from './krampouz-container/krampouz-details/krampouz-details.component';
import { KrampouzFormComponent } from './krampouz-container/krampouz-form/krampouz-form.component';
import { KrampouzListComponent } from './krampouz-container/krampouz-list/krampouz-list.component';

import { KRAMPOUZ_ROUTES } from './krampouz.routes';


@NgModule({
  declarations: [
    KrampouzListComponent,
    KrampouzDetailsComponent,
    KrampouzContainerComponent,
    KrampouzFormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(KRAMPOUZ_ROUTES),
    SharedModule
  ]
})
export class KrampouzModule { }
