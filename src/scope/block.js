function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Function Scope
    let fruit2 = "Pineapple"; //Block Scope
    const fruit3 = "Kiwi" // block Scope

    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();