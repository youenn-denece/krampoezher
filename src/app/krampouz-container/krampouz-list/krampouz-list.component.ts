import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';

@Component({
  selector: 'app-krampouz-list',
  templateUrl: './krampouz-list.component.html',
  styleUrls: ['./krampouz-list.component.scss']
})
export class KrampouzListComponent implements OnInit {
  @Input() public krampouzs: Krampouz[] = [];

  constructor() {}

  ngOnInit(): void {}
}
