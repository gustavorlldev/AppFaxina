import { Faxina } from './../../model/faxina-model';
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { Usuario } from "../login/usuario";
@Injectable ({
    providedIn: 'root'
})

export class AddFaxinaService {

    constructor(private db: AngularFireDatabase) {
    };

    insert(faxina: Faxina) {
      this.db.list('faxina').push(faxina)
      .then((result: any) => {
          console.log(result.key);
      });
  }

  getAll(){
    return this.db.list<Faxina[]>('faxina')
        .snapshotChanges()
        .pipe(
            map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
            })
        );
}
}
