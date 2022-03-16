import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer, Subscription, interval } from 'rxjs';
// Operatori
import { of, from, range, fromEvent, concat, merge, throwError, timer } from 'rxjs';
import {
  first, take, map, filter, every, groupBy, mergeMap, toArray, delay, distinct, catchError,
  finalize, retry, retryWhen, tap, delayWhen, switchMap, pluck, defaultIfEmpty
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyObservable';
  myArray: Array<any> = ['A', 'B', 'C', 'D', 'E', 12, 'G'];

  myObject = [
    { nome: 'Aldo', eta: 33 },
    { nome: 'Giovanni', eta: 22 },
    { nome: 'Giacomo', eta: 33 }
  ];
  
  myObject2 = [
    { nome: 'Alda', eta: 33 },
    { nome: 'Giovanni', eta: 22 },
    { nome: 'Giacomina', eta: 33 }
  ];

  myObservable$ = new Observable(observer => {
    // Al sottoscrittore/observer vengono passati i valori via via emessi dall'Observable
    // L'esecuzione può produrre più valori nel tempo, in modo sincrono o asincrono.
    observer.next(1);
    observer.next(2);
    observer.next(3);
    // Invio asincrono
    setTimeout(() => {
        observer.next(4);
    }, 2000);
    // Genera un errore
    throw new Error('OPS!');
    observer.next(5);
    setTimeout(() => {
        observer.complete();
    }, 3000);
  });


  myObservableOf$ = of(1, 2, 1, 3, 2, 4, 6);
  myObservableFrom$ = from(this.myArray);
  myObservableRange$ = range(9, 11);
  myObservableInterval$ = interval(1000);
  myObservableConcat$ = concat(this.myObservableFrom$,this.myObservableRange$);

  mySubscriber!: Subscription;


  myObserver: Observer<any> = {
    next: value => console.log('Next - L\'Observer ha ricevuto il valore successivo: ' + value),
    error: error => console.error('Error - L\'Observer ha ricevuto un errore: ' + error),
    complete: () => console.log('Complete - L\'Observer ha ricevuto notifica di trasmissione completata'),
  };

  constructor() {
    console.log("Constructor");
  }

  mySubscription() {
      this.mySubscriber = this.myObservableInterval$.subscribe(this.myObserver);
  }
  myUnsubscription() {
    this.mySubscriber.unsubscribe();
  }

  mySubscribe() {
    // this.myObservableOf$
    // this.myObservableFrom$
    this.myObservableConcat$
    // this.myObservable$
    // metodo intermediario che restituisce un observable 
    .pipe(
      // first()
      // take(4),
      // map(value => value * 10)
      // filter(value => value % 2 === 0)
      // every si applica su tutti
      // every(value => typeof value === 'number')
      // map(value =>value.toLowerCase()),
      // , is required to catch the error generated by map
      // catchError(value=>of('F corretto'))
      

    )    
    .subscribe({
        next: value => console.log('Subscribe() next: ' + JSON.stringify(value)),
        error: error => console.error('Subscribe() error: ' + error),
        complete: () => console.log('Subscribe() completed\n----')
      });
  }
  mySubscribeError() {
    // this.myObservableOf$
    // this.myObservableFrom$
    // this.myObservableConcat$
    this.myObservable$
    // metodo intermediario che restituisce un observable 
    .pipe(
      // first()
      // take(4),
      // map(value => value * 10)
      // filter(value => value % 2 === 0)
      // every si applica su tutti
      // every(value => typeof value === 'number')
      // map(value =>value.toLowerCase()),
      // , is required to catch the error generated by map
      // catchError(value=>of('F corretto'))
      // finalize(()=>console.log("Finalized"))
      // retry(2)
      retryWhen(error=>{
        return error.
        pipe(
          delayWhen(()=> timer(3000)),
          tap(()=>console.log('Retrying...'))
        )
      })
      
    )    
    .subscribe({
        next: value => console.log('Subscribe() next: ' + JSON.stringify(value)),
        error: error => console.error('Subscribe() error: ' + error.message),
        complete: () => console.log('Subscribe() completed\n----')
      });
  }
  ngOnInit() {
    console.log("OnInit");        
    // this.mySubscribe();
    // this.mySubscribeError();       
    this.mySubscription()
  }


}
