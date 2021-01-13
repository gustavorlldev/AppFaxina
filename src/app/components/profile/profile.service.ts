import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { Usuario } from "../login/usuario";

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private _angularFireDatabase: AngularFireDatabase){ }

    insert(user: Usuario) {
        this._angularFireDatabase.list("usuario").push(user)
        .then((result: any) => {
            console.log(result.key)
        })
    }

    update(user: Usuario, key:string) {
        this._angularFireDatabase.list("usuario").update(key, user)
            .catch((error:any) => {
                console.error(error);
            })
    }

    getAll() {
        return this._angularFireDatabase.list<Usuario>('usuario')
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes.map(data => ({ key: data.payload.key, ...data.payload.val() }))
            })
        )
    }

    delete(key:string) {
        this._angularFireDatabase.object(`usuario/${key}`).remove

    }
}
