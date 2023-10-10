import { Component, OnDestroy, OnInit } from '@angular/core';
import { Krampouz } from '../shared/interfaces/krampouz.interface';
import { KrampouzService } from '../shared/services/krampouz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-krampouz-container',
  templateUrl: './krampouz-container.component.html',
  styleUrls: ['./krampouz-container.component.scss']
})
export class KrampouzContainerComponent implements OnInit, OnDestroy {

  public krampouzs: Krampouz[] = [];

  public subscription: Subscription = new Subscription();

  constructor(private krampouzService: KrampouzService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.krampouzService.krampouzs$.subscribe((krampouzs: Krampouz[]) => {
        this.krampouzs = krampouzs;
      })
    );

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe(); 
  }
}
