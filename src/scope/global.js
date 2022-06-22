// Variables

var a; // declarar
var b = "b"; // declaracion y asignacion
b = "bebe"; // reasignacion
var a = "aa"; //redeclaracion

// Global Scope
var fruit = "Apple"; //Global

function bestFruit() {
    console.log(fruit);
}
bestFruit();


function countries() {
    country = "Colombia"; // Se esta asignando un valor pero no se esta declarando una variable
    console.log(country);
}
console.log(country);