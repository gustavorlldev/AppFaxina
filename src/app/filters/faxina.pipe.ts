import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'faxinaFilter',
  pure: false
})
export class FaxinaPipe implements PipeTransform {

  transform(faxinaList: any, searchWord: string): any {
   
        if (!faxinaList){
          return [];
        }

        if(!searchWord){
          return faxinaList;
        }
          
        let filteredList = [];
        if (faxinaList.length > 0) {
          searchWord = searchWord.toLowerCase();
          faxinaList.forEach(item => {
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
