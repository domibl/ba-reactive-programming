import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, fromEvent, concat, merge, of, from, observable, combineLatest } from 'rxjs';
import { DegreeProgram } from '../model/degree-program';
import { Course } from '../model/course';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { withLatestFrom, map, debounceTime, distinctUntilChanged, switchMap, startWith, catchError } from 'rxjs/operators';
import { MatPaginator, MatSort, MatPaginatorIntl } from '@angular/material';

@Component({
    selector: 'app-degree-program-detail',
    templateUrl: './degree-program-detail.component.html',
    styleUrls: ['./degree-program-detail.component.scss']
})
export class DegreeProgramDetailComponent implements OnInit, AfterViewInit {
    displayedColumns: string[] = ['semester', 'title', 'courseType', 'examType', 'ects'];

    isLoadingResults = true;
    errorOccured = false;
    resultsLength = 0;

    degreeProgramId: number;

    degreeProgram$: Observable<DegreeProgram>;
    courses$: Observable<Course[]>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    filterChanged$: Observable<any>;

    @ViewChild('searchInput') input: ElementRef;

    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        this.degreeProgramId = this.route.snapshot.params['id'];

        this.degreeProgram$ = this.dataService.getDegreeProgramById(this.degreeProgramId);

        let paginatorIntl: MatPaginatorIntl = new MatPaginatorIntl();
        paginatorIntl.nextPageLabel = ' Nächste Seite';
        paginatorIntl.previousPageLabel = ' Vorherige Seite';
        paginatorIntl.itemsPerPageLabel = 'Kurse pro Seite';
        paginatorIntl.lastPageLabel = 'Letzte Seite';
        paginatorIntl.firstPageLabel = 'Erste Seite';
        paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
            return `${Math.min(page * pageSize + 1, length)} - ${Math.min(page * pageSize + pageSize, length)} von ${length}`;
        };

        this.paginator._intl = paginatorIntl;

        // this.loadCourses()
        //     .pipe(
        //         withLatestFrom(this.degreeProgram$)
        //     )
        //     .subscribe(([courses, degreeProgram]) => {
        //         console.log("courses", courses);
        //         console.log("degreeProgram", degreeProgram);
        //     });
    }

    ngAfterViewInit(): void {
        // If the user changes the sort order, reset back to the first page.
        // this.sort.sortChange.subscribe(() => {
        //     // this.paginator.page.next({previousPageIndex: 0, pageIndex: 0, pageSize: 5, length: 0})
        //     this.paginator.pageIndex = 0;
        // });

        this.filterChanged$ = fromEvent<any>(this.input.nativeElement, 'keyup')
            .pipe(
                map(event => event.target.value),
                debounceTime(400),
                distinctUntilChanged(),
                startWith('')
            );

        this.courses$ = this.loadCourses();
    }


    loadCourses(): Observable<Course[]> {
        return combineLatest(this.sort.sortChange.pipe(startWith({active: "semester", direction: "asc" })), this.paginator.page.pipe(startWith({previousPageIndex: 0, pageIndex: 0, pageSize: 5, length: 0})), this.filterChanged$)
            .pipe(
                switchMap(([sort, page, filter]) => {
                    console.log(sort);
                    console.log(page);
                    console.log(filter);
                    this.isLoadingResults = true;
                    return this.dataService!.getCourses(`degreeProgramId=${this.degreeProgramId}&pageSize=${page.pageSize}&pageNumber=${page.pageIndex}&sortOrder=${sort.direction}&filter=${filter}`);
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.errorOccured = false;
                    this.resultsLength = data.totalCount;
                    return data.items;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    this.errorOccured = true;
                    return of([]);
                })
            );
    }

}
