import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userId$: BehaviorSubject<number> = new BehaviorSubject(this.getRandomIntInclusive(1, 10));

  private getRandomIntInclusive(min: number, max: number) {

    return Math.floor(Math.random() * (max - min + 1) + min);

  }

}
