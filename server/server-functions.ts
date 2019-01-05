import { Request, Response } from 'express';

import { DEGREEPROGRAMS, COURSES } from "./db-data";
import { DegreeProgram } from 'src/app/model/degree-program';
import { Course } from 'src/app/model/course';


export function getAllDegreePrograms(req: Request, res: Response) {
    // simulate errors to check error handling
    /*
        const error = (Math.random() >= 0.5);

        if (error) {
            console.log("ERROR loading degree programms!");
            res.status(500).json({message: 'random error occurred.'});
        }
        else { */

    setTimeout(() => {
        res.status(200).json(DEGREEPROGRAMS);
    }, 200);

    //  }
}


export function getDegreeProgramById(req: Request, res: Response) {
    const degreeProgramId = req.params["id"];
    const degreeProgrammes: DegreeProgram[] = DEGREEPROGRAMS;
    const degreeProgram: DegreeProgram = degreeProgrammes.find(degreeProgram => degreeProgram.id == degreeProgramId);

    res.status(200).json(degreeProgram);
}

export function saveDegreeProgram(req: Request, res: Response) {

    const id = req.params["id"],
        changes = req.body;

    console.log("Saving degree program", id, JSON.stringify(changes));

    let index: number = DEGREEPROGRAMS.findIndex((degreeProgram, index) => degreeProgram.id == id);
    DEGREEPROGRAMS[index] = {
        ...DEGREEPROGRAMS[index],
        ...changes
    };

    setTimeout(() => {
        res.status(200).json(DEGREEPROGRAMS[index]);
    }, 2000);
}

export function getCoursesFiltered(req: Request, res: Response) {

    const queryParams = req.query;

    const degreeProgramId = queryParams.degreeProgramId,
        filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder || 'asc',
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize) || 3;

    let courses: Course[] = COURSES.filter(course => course.degreeProgramId == degreeProgramId).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
        courses = courses.filter(course => course.title.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
        courses = courses.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const coursesPage: Course[] = courses.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json(coursesPage);
    }, 1000);
}