import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  private userSource = new BehaviorSubject ({ user: null, key:''});
  currentUser = this.userSource.asObservable();

  collectUser(user: UserData, key: string){
    this.userSource.next({user: user, key: key});
  }
}
