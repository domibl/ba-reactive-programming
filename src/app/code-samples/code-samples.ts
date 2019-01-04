// Example 1.1

function f(callback) {
    // Hier werden länger dauernde Operationen ausgeführt
    var message = prompt('Bitte geben Sie eine Nachricht ein.');
    callback(message);
}

function g(message) {
    alert('Erhaltene Nachricht: ' + message);
}

// Aufrufen von f mit g als Rückruffunktion
f(g);

function result(message) {
    alert('Erhaltene Nachricht: ' + message);
}

function processMessage(callback) {
    var message = prompt('Bitte geben Sie eine Nachricht ein.');
    callback(message);
}

processMessage(result);

// Example 1.2
var promise = new Promise(function (resolve, reject) {
    // asynchrone länger dauernde Operation
    let success = true;
    /* Alles hat funktioniert */
    if (success) {
        resolve("Ergebnis");
    }
    else { // Fehler aufgetregen
        reject(Error("Aufgetretener Fehler"));
    }
});

promise.then(function (res) {
    console.log(res);
}, function (err) {
    console.log(err);
});

// Example 1.3
document.addEventListener('click', () => console.log('clicked'));


// Example 1.4
const isUneven = num => num % 2 === 1;
const multiply = num => num * 2;
const add = (total, num) => total + num;

const numbers = [1,2,3,4,5,6,7,8,9];
numbers.filter(isUneven).map(multiply).reduce(add); // 50