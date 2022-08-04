import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private getPost: BehaviorSubject<string>;

  constructor(private httpService: HttpService) {
    this.getPost = new BehaviorSubject<string>('');
  }

  getValue(): Observable<string> {
    return this.getPost.asObservable();
  }

  setValue(newValue: any): void {
    this.getPost.next(newValue);
  }
}
