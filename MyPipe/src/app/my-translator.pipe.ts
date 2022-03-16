import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';

@Pipe({
  name: 'myTranslator'
})
export class MyTranslatorPipe implements PipeTransform {
  // valori in ingresso =Aldo
  // volore in uscita =Al
  transform(value: unknown,...args: unknown[]): unknown {
    // let name;
    // console.log(value);
    // if(value=='Aldo'){
      
    //   name='Al';
    // }else if(value=='Giovanni'){
    //   name='Gio';
    // }else if(value=='Giacomo'){
    //   name='Jack';
    // }

    switch(value){
      case'Aldo':
        return 'Al';
        break;
        case'Giovanni':
        return 'Gio';
        break;
        case'Giacomo':
        return 'Jack';
        break;
        default:
          return null;
    }
    
  }

}
