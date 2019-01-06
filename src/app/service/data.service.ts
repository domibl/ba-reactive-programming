import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DegreeProgram } from '../model/degree-program';
import { HttpClient } from '@angular/common/http';
import { tap, retry, map, filter } from 'rxjs/operators';
import { CoursePage } from '../model/coursePage';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private behaviourSubject = new BehaviorSubject<DegreeProgram[]>([]);

    degreePrograms$: Observable<DegreeProgram[]> = this.behaviourSubject.asObservable();
    
    constructor(private http: HttpClient) { 
    }

    getDegreePrograms(): Observable<DegreeProgram[]>{
        this.http.get<DegreeProgram[]>("/api/degree-programs").pipe(
            tap(() => console.log("HTTP get degree programs executed!")),
            retry(3)
        ).subscribe(
            data => this.behaviourSubject.next(data),
            error => this.behaviourSubject.error(error)
        );
        return this.degreePrograms$;
    }

    getDegreeProgramById(degreeProgramId: number): Observable<DegreeProgram>{
        if(this.behaviourSubject.getValue().length == 0)
            this.getDegreePrograms();
        return this.degreePrograms$
            .pipe(
                map(degreePrograms => degreePrograms.find(degreeProgram => degreeProgram.id == degreeProgramId)),
                filter(degreeProgram => !!degreeProgram)
            );
    }
    
    saveDegreeProgram(degreeProgramId: number, changes): Observable<any>{
        const degreePrograms = this.behaviourSubject.getValue();
        const courseIndex = degreePrograms.findIndex(degreeProgram => degreeProgram.id == degreeProgramId);
        const newDegreePrograms = degreePrograms.slice(0);

        newDegreePrograms[courseIndex] = {
            ...degreePrograms[courseIndex],
            ...changes
        };

        return this.http.put(`/api/degree-programs/${degreeProgramId}`, changes).pipe(
            tap(() => console.log("HTTP update degree program executed!")),
            retry(3),
            tap(() => this.behaviourSubject.next(newDegreePrograms))
        );
    }

    getCourses(filter: string): Observable<CoursePage>{
        return this.http.get<CoursePage>(`/api/courses?${filter}`).pipe(
            tap(() => console.log("HTTP get courses executed!")),
            retry(3)
        );
    }
}
