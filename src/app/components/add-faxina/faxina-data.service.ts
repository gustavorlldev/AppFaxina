import { Faxina } from 'src/app/model/faxina-model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FaxinaDataService {
    private faxinaSource = new BehaviorSubject({faxina: null, key: ''});
    currentFaxina = this.faxinaSource.asObservable();

    constructor() {}

    changeFaxina(faxina: Faxina, key: string) {
        this.faxinaSource.next({ faxina: faxina, key: key});
    }
}
