import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../login/usuario';
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( ) { }

  private userSource = new BehaviorSubject ({ user: null, key:''});
  currentUser = this.userSource.asObservable();

  collectUser(user: Usuario, key: string){
    this.userSource.next({user: user, key: key});
    
  }
}
