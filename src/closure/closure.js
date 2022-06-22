function greeting() {
    let userName = 'icadena';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const gr = greeting();
console.log(g); // retornamos la funcion, la definicion qeu tiene displayUserName() 
console.log(g()); // ejecutamos