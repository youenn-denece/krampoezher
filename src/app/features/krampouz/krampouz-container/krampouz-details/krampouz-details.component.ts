import { Component, OnDestroy, OnInit } from '@angular/core';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { KrampouzService } from 'src/app/shared/services/krampouz.service';
import { PanierService } from 'src/app/shared/services/panier.service';


@Component({
  selector: 'app-krampouz-details',
  templateUrl: './krampouz-details.component.html',
  styleUrls: ['./krampouz-details.component.scss']
})
export class KrampouzDetailsComponent implements OnInit, OnDestroy {
  public krampouz?: Krampouz;
  public subscription!: Subscription;
  
  constructor(
    private panierService: PanierService,
    private krampouzService: KrampouzService,
    private activatedRoute : ActivatedRoute  
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
      this.subscription = this.krampouzService
        .getKrampouz(+paramMap.get('index')!)
        .subscribe((krampouz: Krampouz) => {
          this.krampouz = krampouz;
        });
      }
    );
       
  }

  public addToPanier(): void {
    if(this.krampouz) {
      this.panierService.addPanier(this.krampouz.ingredients);
    } 
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}