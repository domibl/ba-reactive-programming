import { Component, OnInit } from '@angular/core';
import { from, Observable, Subject, asyncScheduler, interval, fromEvent, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // this.createSimpleObservable();
        // this.createSimpleSubject();
        // this.useSimpleScheduler();
        // this.createObservalbes();
        // this.cancelSequence();
        // this.filterNumbers();
    }

    createObservalbes() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000);
        });

        // Einzelwert, synchron
        of(10).subscribe(
            (next) => console.log(next),
            (error) => console.log(error),
            () => console.log('completed')
        );

        // Mehrere Werte, asynchron
        from(["Max", "Lena", "Lisa"]).subscribe(
            (next) => console.log(next),
            (error) => console.log(error),
            () => console.log('completed')
        );

        // Einzelwert, asynchron
        from(promise).subscribe(
            (next) => console.log(next),
            (error) => console.log(error),
            () => console.log('completed')
        );

        // Mehrere Werte, asynchron
        fromEvent(document, 'click').subscribe(
            (next) => console.log(next),
            (error) => console.log(error),
            () => console.log('completed')
        );
    }

    cancelSequence() {
        let observable = interval(500);

        let subsciption1 = observable.subscribe(next => console.log('subscription1: ' + next));
        let subsciption2 = observable.subscribe(next => console.log('subscription2: ' + next));

        setTimeout(() => {
            subsciption1.unsubscribe();
            console.log('subscription1 cancelled!');
        }, 1000);
    }

    useSimpleScheduler() {
        const numbers = [];
        for (let i: number = 0; i < 2000; i++) {
            numbers.push(i);
        }

        console.log('synchronous scheduler: before subscription');

        from(numbers).subscribe(
            null,
            null,
            () => {
                console.log('synchronous scheduler: completed');
            }
        );

        console.log('synchronous scheduler: after subscription');

        console.log('asynchronous scheduler: before subscription');

        from(numbers, asyncScheduler).subscribe(
            null,
            null,
            () => {
                console.log('asynchronous scheduler: completed');
            }
        );

        console.log('asynrchronous scheduler: after subscription');
    }

    createSimpleSubject() {
        let subject: Subject<string> = new Subject<string>();
        subject.subscribe(
            (next) => {
                console.log(`next: ${next}`);
            },
            (error) => {
                console.log(`error: ${error}`);
            },
            () => {
                console.log('completed');
            }
        );

        subject.next('message #1');
        subject.next('message #2');
        subject.next('message #3');
        subject.complete();
    }

    createSimpleObservable() {
        const observable: Observable<number> = Observable.create(observer => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            observer.complete();
        });

        observable.subscribe(
            (next) => {
                console.log(`next: ${next}`);
            },
            (error) => {
                console.log(`error: ${error}`);
            },
            () => {
                console.log('completed');
            }
        );
    }

    filterNumbers() {
        from([1, 2, 3, 4, 5, 6, 7, 8, 9]).pipe(
            filter(number => number % 2 === 0),
            map(number => number * 2)
        ).subscribe(
            (data) => console.log(data),
            (error) => console.log(error),
            () => console.log('completed')
        );
        // -> 4, 8, 12, 16
    }
}
