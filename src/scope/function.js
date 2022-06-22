function greeting() {
    let userName = "Isa"; // Solo se puede acceder a esta variable en el Scope Local y de sus funciones anidadas
    console.log(userName);

    if (userName === "Isa") { //la triple igualdad valida valor y tipo
        console.log(`Hello ${userName}!`)
    }
}

greeting(); 
console.log(userName); //No se puede acceder a la variable, porque tiene alcance solo en la funcion 