//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directives
import { SelectedDirective } from '../directives/selected.directive';
//Pipe
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [ 
    SelectedDirective,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectedDirective,
    FilterPipe,
    CommonModule 
  ]
})
export class SharedModule { }
