import { Component, OnInit } from '@angular/core';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { KrampouzService } from '../../shared/services/krampouz.service';


@Component({
  selector: 'app-krampouz-details',
  templateUrl: './krampouz-details.component.html',
  styleUrls: ['./krampouz-details.component.scss']
})
export class KrampouzDetailsComponent implements OnInit {
  public krampouz!: Krampouz;
  
  constructor(
    private panierService: PanierService,
    private krampouzService: KrampouzService,
    private activatedRoute : ActivatedRoute  
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const krampouzIndex = paramMap.get('index');
      if (krampouzIndex) {
        this.krampouz = this.krampouzService.getKrampouz(+krampouzIndex);
      }
    });
       
  }

  public addToPanier(): void {
    if(this.krampouz) {
      this.panierService.addPanier(this.krampouz.ingredients);
    } 
  }
}