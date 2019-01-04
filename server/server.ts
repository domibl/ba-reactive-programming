import { Application } from 'express';
import { getAllDegreePrograms, getDegreeProgramById, getCoursesFiltered, saveCourse } from './server-functions';

const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

// register routes
app.route('/api/degree-programmes').get(getAllDegreePrograms);
app.route('/api/degree-programmes/:id').get(getDegreeProgramById);
app.route('/api/courses').get(getCoursesFiltered);
app.route('/api/courses/:id').put(saveCourse);


app.get('/', function (req, res) {
    res.status(200).send('Server is running ...');
});

const httpServer = app.listen(PORT, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



