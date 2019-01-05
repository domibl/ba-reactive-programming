import { DegreeProgram } from "src/app/model/degree-program";
import { Course } from "src/app/model/course";

export const DEGREEPROGRAMS: DegreeProgram[] = [
    {
        id: 1,
        title: "Software Engineering",
        description: "Software ist der „Geist in der Maschine“. Sie steckt zum Beispiel in der Kaffeemaschine, im Auto und natürlich in jedem Rechner: im Smartphone ebenso wie im Supercomputer. Bei der Entwicklung von innovativer Qualitätssoftware ist kreatives Problemlösen durch Einsatz modernster Methoden und Werkzeuge gefragt. Somit geht das Studium Software Engineering über das reine Programmieren weit hinaus. Es umfasst den gesamten Software-Entwicklungszyklus: von der Problemanalyse über Design, Implementierung und Test bis zur Wartung und Weiterentwicklung.",
        degreeProgramType: "Bachelorstudium",
        organizationType: "Vollzeit oder berufsbegleitend",
        academicDegree: "Bachelor of Science in Engineering (BSc)",
        semesterCount: 6,
        ects: 180
    },
    {
        id: 2,
        title: "Software Engineering",
        description: "Software ist allgegenwärtig – aber unsichtbar: Sie steckt in der Kaffeemaschine, im Auto und natürlich in jedem Rechner, vom Smartphone bis zum Supercomputer. Software ist „der Geist in der Maschine“ und bringt der Hardware das Denken bei. Für die Entwicklung von leistungsfähigen Softwaresystemen, die spezielle Anforderungen erfüllen sollen und innovative technologische Ansätze verfolgen, sind über das Bachelorniveau hinausgehendes Wissen und zusätzliche Fähigkeiten notwendig. Es braucht – um eine Analogie zum Hausbau zu verwenden – nicht nur Software-HandwerkerInnen, also EntwicklerInnen, sondern auch Software-ArchitektInnen. Das Ziel des Masterstudiengangs Software Engineering (SE) ist es, Sie dazu auszubilden.",
        degreeProgramType: "Masterstudium",
        organizationType: "Vollzeit",
        academicDegree: "Master of Science in Engineering (MSc)",
        semesterCount: 4,
        ects: 120
    },
    {
        id: 3,
        title: "Information Engineering und -Management",
        description: "IT-Verantwortliche in Unternehmen sehen sich mit der Herausforderung konfrontiert, Informationssysteme zu planen, zu entwickeln und zu analysieren, mit denen strategische Unternehmensziele erreicht werden. Bei diesen IT-Systemen stehen nicht nur die gemeinsame Datennutzung, sondern auch die Benutzerorientierung im Fokus. Für ihre Realisierung sind neben fundiertem technischem Know-how in Softwareentwicklung, Business Intelligence und analytischer IT somit zusätzlich organisatorische, rechtliche und soziale Kompetenzen nötig. Eben diese Kombination von Wissen wird im Masterstudium Information Engineering und -Management vermittelt, das damit Aufstiegsmöglichkeiten in verantwortungsvolle Positionen im IT-Management eröffnet.",
        degreeProgramType: "Masterstudium",
        organizationType: "berufsbegleitend",
        academicDegree: "Master of Science in Engineering (MSc)",
        semesterCount: 4,
        ects: 120
    },
    {
        id: 4,
        title: "Human-Centered Computing",
        description: "Die Vernetzung von Mensch und Computer wird immer enger, sei es bei der Erfüllung von Aufgaben im Beruf, in der Freizeit oder bei der Erledigung alltäglicher Dinge. Damit die zunehmend komplexe Technik dahinter auch zukunftsträchtig und menschengerecht ist, muss sie personalisierbar sein und unterstützende Funktionen bieten, wenn alters- oder situationsbedingt Fähigkeiten eingeschränkt sind. Für die Entwicklung besonders nutzerfreundlicher IT-Systeme bedarf es Know-how in vielfältigen Bereichen, unter anderem in Interaktionsdesign, Sensorik, Bildverarbeitung, Natural User Interfaces, Design Thinking und Prototyping. Eben diese interdisziplinäre Ausbildung bietet der 2014 neugestartete Master Human-Centered Computing.",
        degreeProgramType: "Masterstudium",
        organizationType: "berufsbegleitend",
        academicDegree: "Master of Science in Engineering (MSc)",
        semesterCount: 4,
        ects: 120
    },
];

export const COURSES: Course[] = [
    {
        id: 1,
        degreeProgramId: 1,
        title: "Softwareentwicklung mit klassischen Sprachen",
        semester: 3,
        courseType: "Pflicht / Vorlesung",
        ects: 2,
        description: "Die Programmiersprache ANSI/ISO C für die imperative Programmierung mit besonderer Betonung der schwierigen/fehleranfälligen Konzepte, mit dem Ziel einen guten Programmierstil zu entwickeln. Kurze Wiederholung der Grundlagen der objektorientierten Programmierung aus dem Modul PRO2. Programmierung mit ANSI/ISO C++: Programmiersprache C++ für die imperative aber vor allem für die objektorientierte und generische Programmierung (mit Schablonen, templates), Konzept der Ausnahmen und deren Behandlung (exception handling).",
        examType: "Schriftliche Prüfung",
    },
    {
        id: 2,
        degreeProgramId: 1,
        title: "Softwareentwicklung mit klassischen Sprachen",
        semester: 3,
        courseType: "Pflicht / Übung",
        ects: 3,
        description: "Die Übungen vertiefen die Vorlesung, indem Beispiele neuer Algorithmen (z. B. für kombinatorische Suchprobleme) und Datenstrukturen (z. B. Graphen) in C und C++ umgesetzt werden. Die Übungen werden unter UNIX durchgeführt, wobei besonders auch auf Programmentwicklungswerkzeuge (großteils Open-Source-Software) eingegangen wird.",
        examType: "Immanente Prüfung",
    },
    {
        id: 3,
        degreeProgramId: 1,
        title: "Komponenten-orientierte Softwareentwicklung",
        semester: 5,
        courseType: "Pflicht / Vorlesung",
        ects: 2,
        description: "Einführung in die Konzepte der komponentenorientierten Software-Entwicklung, Architektur von mehrschichtigen Anwendungen, Grundkon-zepte der .NET-Technologie, Assemblies, .NET Core, Fortgeschrittene Konzepte von C# (Vererbung, Erweiterungsmethoden, Generics, Kovari-anz/Kontravarianz, asynchrone Programmierung) , Basiskonzepte des .NET-Frameworks (Delegates, Attribute, Base-Class-Library, Streams, LINQ), Entwicklung von Rich-Clients (Windows Presentation Foundation, Universal Windows Platform) und Web-Anwendungen (ASP.NET MVC, ASP.NET Core), Architektur von .NET-Anwendungen, RESTful Web Services (ASP.NET Web API), SOAP-basierte Web Services, Interoperabilität mit anderen Sprachen.",
        examType: "Schriftliche Prüfung",
    },
    {
        id: 4,
        degreeProgramId: 1,
        title: "Komponenten-orientierte Softwareentwicklung",
        semester: 5,
        courseType: "Pflicht / Übung",
        ects: 4,
        description: "Einführung in die Konzepte der komponentenorientierten Software-Entwicklung, Architektur von mehrschichtigen Anwendungen, Grundkon-zepte der .NET-Technologie, Assemblies, .NET Core, Fortgeschrittene Konzepte von C# (Vererbung, Erweiterungsmethoden, Generics, Kovari-anz/Kontravarianz, asynchrone Programmierung) , Basiskonzepte des .NET-Frameworks (Delegates, Attribute, Base-Class-Library, Streams, LINQ), Entwicklung von Rich-Clients (Windows Presentation Foundation, Universal Windows Platform) und Web-Anwendungen (ASP.NET MVC, ASP.NET Core), Architektur von .NET-Anwendungen, RESTful Web Services (ASP.NET Web API), SOAP-basierte Web Services, Interoperabilität mit anderen Sprachen.",
        examType: "Immanente Prüfung",
    },

    {
        id: 5,
        degreeProgramId: 4,
        title: "Augmented Reality",
        semester: 2,
        courseType: "Pflicht / Integrierte Lehrveranstaltung",
        ects: 5.5,
        description: "Überblick und Konzepte von Augmented Reality Grundlagen Computergrafik Anwendungsgebiete der AR und Softwareentwicklung Trackingrundlagen und optisches Tracking Mobile Augmented Reality Head Mounted Displays Räumliche Augmented Reality Tangible User Interfaces Kollaborative AR Anwendungen Fortgeschrittene Darstellungsverfahren Interaktionstechniken",
        examType: "Mündliche oder Schriftliche Prüfung",
    }
];


export function findDegreeProgramById(degreeProgramId: number): DegreeProgram {
    return DEGREEPROGRAMS[degreeProgramId];
}

export function findCoursesForDegreeProgram(degreeProgramId: number): Course[] {
    return COURSES.filter(course => course.degreeProgramId == degreeProgramId);
}