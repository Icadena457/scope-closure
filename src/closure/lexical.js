const myGlobal = 0;

function myFunction() {
    const num = 1;
    console.log(myGlobal);

    function parent() { //funcion interna
        const inner = 2;
        console.log(num, myGlobal);

        function child() {
            console.log(inner, num, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();