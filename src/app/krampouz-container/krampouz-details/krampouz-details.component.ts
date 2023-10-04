import { Component, Input, OnInit } from '@angular/core';
import { Krampouz } from 'src/app/interfaces/krampouz.interface';


@Component({
  selector: 'app-krampouz-details',
  templateUrl: './krampouz-details.component.html',
  styleUrls: ['./krampouz-details.component.scss']
})
export class KrampouzDetailsComponent implements OnInit {
  @Input() public krampouz!: Krampouz;
  
  constructor() { }

  ngOnInit(): void {
  }

}
