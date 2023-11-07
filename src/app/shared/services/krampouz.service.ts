import { Injectable } from '@angular/core';
import { Krampouz } from '../interfaces/krampouz.interface';
import { BehaviorSubject, Observable, filter, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KrampouzService {
  public krampouzs$: BehaviorSubject<Krampouz[] | []> = new BehaviorSubject<Krampouz[] | []>([]);

  getKrampouz(index: number): Observable<Krampouz> {
    return this.krampouzs$.pipe(
      filter((krampouzs: Krampouz[]) => krampouzs !== null),
      map((krampouzs: Krampouz[]) => {
        return krampouzs[index];
      })
    )
  }

  addKrampouz(krampouz: Krampouz): Observable<Krampouz> {
   return this.httpClient.post<Krampouz>('https://restapi.fr/api/krampouz', krampouz)
    .pipe(
      tap((savedKrampouz: Krampouz) => {
        const value = this.krampouzs$.value;
        this.krampouzs$.next([...value, savedKrampouz]);
      })
    )
  }

  editKrampouz(krampouzId: string, editedKrampouz: Krampouz): Observable<Krampouz> {
    return this.httpClient.patch<Krampouz>(`https://restapi.fr/api/krampouz/${krampouzId}`, editedKrampouz)
      .pipe(
        tap((savedKrampouz: Krampouz) => {
          const value = this.krampouzs$.value;
              this.krampouzs$.next(value.map((krampouz: Krampouz) => {
                if(krampouz.name === savedKrampouz.name) {
                  return savedKrampouz;
                } else {
                  return krampouz; 
                } 
              }))
        })
      );
  }

  fetchKrampouzs(): Observable<Krampouz[]> {
    return this.httpClient.get<Krampouz[] | []>('https://restapi.fr/api/krampouz').pipe(
      tap((krampouzs: Krampouz[]) => {
        this.krampouzs$.next(krampouzs);
     })
    );
  }

  constructor(private httpClient: HttpClient) {
    // this.seed();
  }

  // seed() {
  //   this.httpClient.post('https://restapi.fr/api/krampouz',
  //   {
  //     name : 'Complète',
  //     img:'https://www.truffissima.com/wp-content/uploads/2020/02/cre%CC%82pe-comple%CC%80te-a%CC%80-la-Truffe-scaled.jpg',
  //     description: 'L\'incontournable, la plus emblématique des crèpes. Un oeuf fermier, du jambon artisanal et de l\'emmental fermier. Il ne lui manque qu\'un tour de moulin à poivre et une pincée de sel. Rien de plus, rien de moins ! SU-CCU-LENT',
  //     ingredients: [
  //       {
  //         name: 'oeuf',
  //         quantity: 1,
  //       },
  //       {
  //         name: 'emmental',
  //         quantity: 50,
  //       },
  //       {
  //         name: 'jambon',
  //         quantity: 1,
  //       },
        
  //     ]
  //   }).subscribe();
  // }
}
