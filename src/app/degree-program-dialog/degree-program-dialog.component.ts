import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DegreeProgram } from '../model/degree-program';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../service/data.service';

@Component({
    selector: 'app-degree-program-dialog',
    templateUrl: './degree-program-dialog.component.html',
    styleUrls: ['./degree-program-dialog.component.scss']
})
export class DegreeProgramDialogComponent implements OnInit {

    form: FormGroup;

    degreeProgram: DegreeProgram;

    @ViewChild('saveButton') saveButton: ElementRef;
    @ViewChild('searchInput') searchInput : ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<DegreeProgramDialogComponent>,
        @Inject(MAT_DIALOG_DATA) degreeProgram: DegreeProgram,
        private dataService: DataService) {

        this.degreeProgram = degreeProgram;

        this.form = formBuilder.group({
            title: [degreeProgram.title, Validators.required],
            academicDegree: [degreeProgram.academicDegree, Validators.required],
            degreeProgramType: [degreeProgram.degreeProgramType, Validators.required],
            organizationType: [degreeProgram.organizationType, Validators.required],
            ects: [degreeProgram.ects, [Validators.required]],
            semesterCount: [degreeProgram.semesterCount, Validators.required],
            description: [degreeProgram.description, Validators.required]
        });

    }

    save(){
        this.dataService.saveDegreeProgram(this.degreeProgram.id, this.form.value)
            .subscribe(
                () => this.close(),
                error => console.log("Error saving degree program", error)
            );
    }

    close() {
        this.dialogRef.close();
    }

    ngOnInit() {

    }
}
