import { Faxineira } from 'src/app/model/faxineira-model';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FaxineiraDataService {
    private faxineiraSource = new BehaviorSubject({faxineira: null, key: ''});
    currentFaxineira = this.faxineiraSource.asObservable();

    constructor() {}

    changeFaxineira(faxineira: Faxineira, key: string) {
        this.faxineiraSource.next({ faxineira: faxineira, key: key});
    }
}
