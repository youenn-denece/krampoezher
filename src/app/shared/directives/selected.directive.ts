import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges{
  @Input() public appSelected?: boolean;
  @HostBinding('style.backgroundColor') public backgroundColor?: string;
  @HostBinding('style.fontWeight') public fontWeight?: string;
  @HostBinding('style.color') public color?: string;
   
  /**
   * Cycle de vie Angular
   * fonction permettant de gerer un peu de style au clic sur la liste des crepes. 
   */
  ngOnChanges(): void {
      if(this.appSelected) {
          this.backgroundColor = 'var(--primary)';
          this.fontWeight = '500';
          this.color = 'white';
      } else {
        this.backgroundColor = 'white';
        this.fontWeight = '400';
        this.color = 'var(--text-regular)';

      }
  }

  constructor() { }

}
