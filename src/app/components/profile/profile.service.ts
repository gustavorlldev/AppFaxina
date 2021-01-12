import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { UserData } from "./userData";

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private _angularFireDatabase: AngularFireDatabase){ }

    insert(user: UserData) {
        this._angularFireDatabase.list("usuario").push(user)
        .then((result: any) => {
            console.log(result.key)
        })
    }

    update(user: UserData, key:string) {
        this._angularFireDatabase.list("usuario").update(key, user)
    }

    getAll() {
        return this._angularFireDatabase.list<UserData>('usuario')
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
