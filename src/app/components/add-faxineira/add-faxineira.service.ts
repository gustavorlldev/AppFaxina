import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Faxineira } from 'src/app/model/faxineira-model';

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
}