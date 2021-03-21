//deklarisanje i inicijalizacija promenljivih
let broj = 5;
const pi = 3.14159265;
let string = "tekst";
let bool = true;

//ispisivanje u konzolu
console.log("Promenljiva a: " + broj);

//nizovi
let arr = [1, 2, 3, 4, 5];
arr.push(6);
let poslednji = arr.pop();
let duzina = arr.length;
let prviElement = arr[0];
// uklanjanje elemenata iz niza
// let pozicija = 1;
// let uklonjeniElement = arr.splice(pozicija, 1);
// let uklonjeniElementi = arr.splice(pozicija, 3);

//for petlja
for (let i = 0; i < 10; i++) {
    console.log("For petlja: " + i);
}

//while petlja
let n = 0;
while (n < 10) {
    console.log("While petlja: " + n);
    n++;
}

//foreach petlja
arr.forEach((e) => console.log("Foreach petlja: " + e));

//objekti
let glumac = {
    ime: "Keanu",
    prezime: "Reeves",
    filmovi: [
        "Matrix",
        "Matrix 2",
        "Matrix 3",
        "John Wick",
        "John Wick 2",
        "John Wick 3",
    ],
};

console.log(glumac);

//template literals
let literal = `Poznati glumac ${glumac.ime} ${glumac.prezime} najpoznatiji je po ulozi u filmu ${glumac.filmovi[0]}`;
console.log(literal);

//DOM manipulacija
const element_sa_id = document.querySelector("#neki_id");
const element_sa_klasom = document.querySelector(".neka_klasa");
const svi_elementi_sa_klasom = document.querySelectorAll(".neka_klasa");
const svi_divovi = document.querySelectorAll("div");

//definisanje funkcija
function f(a, b) {
    return a + b;
}

const af = (a, b) => {
    return a + b;
};

//pozivanje funkcija
console.log(`Obicna funkcija: f(2,3) = ${f(2, 3)}`);
console.log(`Arrow funkcija: f(2,3) = ${af(2, 3)}`);
