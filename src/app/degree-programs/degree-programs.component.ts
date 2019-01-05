import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DegreeProgram } from '../model/degree-program';
import { DataService } from '../service/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DegreeProgramDialogComponent } from '../degree-program-dialog/degree-program-dialog.component';

@Component({
    selector: 'app-degree-programs',
    templateUrl: './degree-programs.component.html',
    styleUrls: ['./degree-programs.component.scss']
})
export class DegreeProgramsComponent implements OnInit {

    degreePrograms$: Observable<DegreeProgram[]>;

    constructor(private dataService: DataService, private dialog: MatDialog) { }

    ngOnInit() {
        this.degreePrograms$ = this.dataService.getDegreePrograms();
    }

    editDegreeProgram(degreeProgram: DegreeProgram){
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = degreeProgram;
        dialogConfig.width = '600px';

        const dialogRef = this.dialog.open(DegreeProgramDialogComponent, dialogConfig);
    }

}
