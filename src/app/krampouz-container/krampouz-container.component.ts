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

  public selectedKrampouz!: Krampouz;

  constructor(private krampouzService: KrampouzService) { }

  ngOnInit(): void {
    this.subscription.add(this.krampouzService.krampouzs$.subscribe((krampouzs: Krampouz[]) => {
      this.krampouzs = krampouzs;
    }));

    this.subscription.add(this.krampouzService.selectedKrampouz$.subscribe((selectedKrampouz: Krampouz) => {
      this.selectedKrampouz = selectedKrampouz;
    }));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe(); 
  }

  /**
   * Appel a la fonction de selection de crepe dans le service
   * @param index 
   */
  public selectKrampouz(index: number): void {
    this.krampouzService.selectKrampouz(index);
  }
}
