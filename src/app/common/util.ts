import { Observable } from 'rxjs';

export function createHttpObservable(url: string) {
    return Observable.create(observable => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, { signal })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    observable.error('Request failed with status code: ' + response.status);
                }
            })
            .then(body => {
                observable.next(body);
                observable.complete();
            })
            .catch(err => {
                observable.error(err);
            });

        return () => controller.abort();
    });
}