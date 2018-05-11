import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems = [
    'Link 1',
    'Link 2',
    'Link 3'
  ];
  public getMenuItems(): Observable<string[]> {
    return of(this.menuItems);
  }
}
