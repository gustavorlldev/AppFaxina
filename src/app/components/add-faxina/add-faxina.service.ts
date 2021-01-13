import { Faxina } from './../../model/faxina-model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable ({
    providedIn: 'root'
})

export class AddFaxinaService {

    constructor(private db: AngularFireDatabase) {
    };

    insert(faxina: Faxina) {
        this.db.list('servicos').push(faxina)
        .then((result: any) => {
            console.log(result.key);
        });
    }
}
