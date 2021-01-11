import { Usuario } from './usuario'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { from, Observable, throwError} from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userCollection: AngularFirestoreCollection<Usuario> = this.afs.collection('usuario')

    constructor(private afs: AngularFirestore,
                private afAuth: AngularFireAuth) {}

    //Autenticação Registro
    register(user: Usuario): Observable<boolean> {
        return from(this.afAuth.createUserWithEmailAndPassword(user.email, user.senha))
            .pipe(switchMap((u: firebase.auth.UserCredential) =>
                this.userCollection.doc(u.user.uid).set({ ...user, id: u.user.uid }).then(() => true)
            ),
                catchError((error) => throwError(error))
            )
    }

    //Autenticação Login
    login(email: string, password: string): Observable<Usuario> {
        return from(this.afAuth.signInWithEmailAndPassword(email, password))
            .pipe(
                switchMap((u: firebase.auth.UserCredential) => this.userCollection.doc<Usuario>(u.user.uid).valueChanges()),
                catchError(() => throwError('Credenciais inválidas')
                )
            )
    }
}
