import { Application } from 'express';
import { getAllDegreePrograms, getDegreeProgramById, getCoursesFiltered, saveDegreeProgram } from './server-functions';

const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

// register routes
app.route('/api/degree-programs').get(getAllDegreePrograms);
app.route('/api/degree-programs/:id').get(getDegreeProgramById);
app.route('/api/degree-programs/:id').put(saveDegreeProgram);
app.route('/api/courses').get(getCoursesFiltered);


app.get('/', function (req, res) {
    res.status(200).send('Server is running ...');
});

const httpServer = app.listen(PORT, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



