import { Injectable } from '@angular/core';
import { AddFaxineiraComponent } from './add-faxineira.component';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase  from 'firebase/app';
import { Faxineira } from 'src/app/model/faxineira-model';
import { map } from 'rxjs/operators';
@Injectable ({
    providedIn: 'root'
})

export class AddFaxineiraService {

    constructor(private db: AngularFireDatabase) {
    };

    insert(faxineira: Faxineira) {
        this.db.list('faxineira').push(faxineira)
        .then((result: any) => {
            console.log(result.key);
        });
    }

    getAll(){
      return this.db.list<Faxineira[]>('faxineira')
          .snapshotChanges()
          .pipe(
              map(changes => {
                  return changes.map(c => ({ key: c.payload.key, ...c.payload.val()}));
              })
          );
  }
}
