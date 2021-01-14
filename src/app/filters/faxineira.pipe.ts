import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'faxineiraFilter',
  pure: false
})
export class FaxineiraPipe implements PipeTransform {

  transform(faxineiraList: any, searchWord: string): any {

        if (!faxineiraList){
          return [];
        }

        if(!searchWord){
          return faxineiraList;
        }

        let filteredList = [];
        if (faxineiraList.length > 0) {
          searchWord = searchWord.toLowerCase();
          faxineiraList.forEach(item => {
            let propValueList = Object.values(item);
            for (let i = 0; i < propValueList.length; i++) {
              if (propValueList[i]) {
                if (propValueList[i].toString().toLowerCase().indexOf(searchWord) > -1) {
                  filteredList.push(item);
                  break;
                }
              }
            }
          });
        }
        return filteredList;
  }

}
