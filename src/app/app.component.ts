import { Component, OnInit } from '@angular/core';
import { Krampouz } from './shared/interfaces/krampouz.interface';
import { KrampouzService } from './shared/services/krampouz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private krampouzService: KrampouzService) {}
  
  ngOnInit(): void {
    this.krampouzService.fetchKrampouzs().subscribe();
  }
  
}
