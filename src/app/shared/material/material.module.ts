import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatGridListModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule
    ],
    declarations: []
})
export class MaterialModule { }
