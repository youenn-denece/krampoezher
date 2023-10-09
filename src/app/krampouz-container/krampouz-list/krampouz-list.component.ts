import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';

@Component({
  selector: 'app-krampouz-list',
  templateUrl: './krampouz-list.component.html',
  styleUrls: ['./krampouz-list.component.scss']
})
export class KrampouzListComponent implements OnInit {
  @Input() public krampouzs: Krampouz[] = [];
  @Input() public selectedKrampouz?: Krampouz;
  @Output() private changeKrampouz: EventEmitter<number> = new EventEmitter; 

  constructor() { }

  ngOnInit(): void {
  }

  public selectKrampouz(index: number): void {
    this.changeKrampouz.emit(index);
  }

}
