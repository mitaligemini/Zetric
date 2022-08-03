import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private getPost: BehaviorSubject<string>;
  
  constructor() {
    this.getPost = new BehaviorSubject<string>('');
  }
  getValue(): Observable<string> {
    return this.getPost.asObservable();
  }
  setValue(newValue: any): void {
    this.getPost.next(newValue);
  }
}
