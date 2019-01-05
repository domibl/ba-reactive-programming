import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, concat } from 'rxjs';
import { DegreeProgram } from '../model/degree-program';
import { Course } from '../model/course';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-degree-program-detail',
    templateUrl: './degree-program-detail.component.html',
    styleUrls: ['./degree-program-detail.component.scss']
})
export class DegreeProgramDetailComponent implements OnInit, AfterViewInit {

    degreeProgramId: number;

    degreeProgram$ : Observable<DegreeProgram>;
    courses$: Observable<Course[]>;

    @ViewChild('searchInput') input: ElementRef;

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.degreeProgramId = this.route.snapshot.params['id'];

        this.degreeProgram$ = this.dataService.getDegreeProgramById(this.degreeProgramId);

        this.loadCourses()
            .pipe(
                withLatestFrom(this.degreeProgram$)
            )
            .subscribe(([courses, degreeProgram]) => {
                console.log("courses", courses);
                console.log("degreeProgram", degreeProgram);
            });
    }

    ngAfterViewInit(): void {
        const filteredCourses$ =  fromEvent<any>(this.input.nativeElement, 'keyup')
            .pipe(
                map(event => event.target.value),
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(search => this.loadCourses(search))
            );

        const initialCourses$ = this.loadCourses();

        this.courses$ = concat(initialCourses$, filteredCourses$);
    }
    

    loadCourses(search = ''): Observable<Course[]> {
        return this.dataService.getCourses(`degreeProgramId=${this.degreeProgramId}&pageSize=100&filter=${search}`);
    }

}
