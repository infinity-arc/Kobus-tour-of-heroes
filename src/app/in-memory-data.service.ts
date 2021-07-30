import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Zef' },
      { id: 12, name: 'Captain Mountain Dew' },
      { id: 13, name: 'Dr DocX' },
      { id: 14, name: 'MassiveClint' },
      { id: 15, name: 'Mr Angular' },
      { id: 16, name: 'Pickle Rick' },
      { id: 17, name: 'Jetman JPEG' },
      { id: 18, name: 'Backpack man' },
      { id: 19, name: 'Poke-a-coconut guy' },
      { id: 20, name: 'See Eend Brah' },
    ];
    return (heroes);
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }


  constructor() { }
}
