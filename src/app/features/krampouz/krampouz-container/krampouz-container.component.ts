import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';
import { KrampouzService } from 'src/app/shared/services/krampouz.service';

@Component({
  selector: 'app-krampouz-container',
  templateUrl: './krampouz-container.component.html',
  styleUrls: ['./krampouz-container.component.scss']
})
export class KrampouzContainerComponent {

  public krampouzs$: Observable<Krampouz[]> = this.krampouzService.krampouzs$;

  constructor(private krampouzService: KrampouzService) { }

}
