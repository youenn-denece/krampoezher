import { Injectable } from '@angular/core';
import { Krampouz } from '../interfaces/krampouz.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KrampouzService {
  public krampouzs$: BehaviorSubject<Krampouz[]> = new BehaviorSubject([
    {
      name : 'Complète',
      img:'https://www.truffissima.com/wp-content/uploads/2020/02/cre%CC%82pe-comple%CC%80te-a%CC%80-la-Truffe-scaled.jpg',
      description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
      ingredients: [
        {
          name: 'oeuf',
          quantity: 1,
        },
        {
          name: 'emmental',
          quantity: 50,
        },
        {
          name: 'jambon',
          quantity: 1,
        },
        
      ]
    },
    {
      name : 'Galette saucisse',
      img:'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F11.2F02.2Fa8ef3508-e08b-4970-8b1c-9e8c8a15376f.2Ejpeg/400x400/quality/80/crop-from/center/galette-saucisse.jpeg',
      description: 'Le grand classique de tout évenement en Ille et Vilaine. Sans moutarde pour les puristes. Avec du ketchup pour les parisiens :(',
      ingredients: [
        {
          name: 'saucisse',
          quantity: 1,
        },
      ]
    },
    {
      name : 'Galette Andouille pommes camembert',
      img:'https://www.kilometre-0.fr/wp-content/uploads/2019/01/images20170128Cuisine_mart325-1.jpg',
      description: 'Une galette bretonne par excellence avec de l\'andouille de Guémené 🙂.',
      ingredients: [
        {
          name: 'Andouille de Géméné',
          quantity: 5,
        },
        {
          name: 'Pommes',
          quantity: 6,
        },
        {
          name: 'Camembert',
          quantity: 4,
        },
        
      ]
    },
    {
      name : 'LA beurre sucre',
      img:'https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F9e7d56fc-f05f-4b62-b042-0dd0037f9358.2Ejpeg/400x400/quality/80/crop-from/center/crepes-beurre-sucre.jpeg',
      description: 'Que dire ??? Une bonne crêpe de forment à la mode finisterienne, beaucoup de beurre, un peu de sucre (roux pour les foufous) et pourquoi pas une pointe de crème fouetée pour le gourmands. ',
      ingredients: [
        {
          name: 'sucre',
          quantity: 20,
        },
        {
          name: 'beurre',
          quantity: 50,
        },
      ]
    },
  ]);

  getKrampouz(index: number) {
    const krampouzs = this.krampouzs$.value;
    return krampouzs[index];
  }

  addKrampouz(krampouz: Krampouz): void {
    const value = this.krampouzs$.value;
    this.krampouzs$.next([...value, krampouz]); 
  }

  editKrampouz(editedKrampouz: Krampouz): void {
    const value = this.krampouzs$.value;

    this.krampouzs$.next(value.map((krampouz: Krampouz) => {
      if(krampouz.name === editedKrampouz.name) {
        return editedKrampouz;
      } else {
        return krampouz;
      } 
    }))
  }

  constructor() {
    
  }
}
