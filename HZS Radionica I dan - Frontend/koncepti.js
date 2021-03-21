let broj = 5;
const PI = 3.14;
let tacno = true;
let tekst = "POZDRAV";

console.log("Broj:" + broj);

let arr = [2, 5, 7, 9, 12];
// console.log(arr[2]);
// arr.push(3);
// console.log(arr);
// let a = arr.pop();
// console.log(a);
// arr[3] = 21;
// console.log(arr);
// let uklonjeniElement = arr.splice(1, 1);
// console.log("Uklonjeni element:" + uklonjeniElement);
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log("FOR petlja: " + i);
}

let n = 0;
while (n < 10) {
    console.log("While petlja: " + n);
    n++;
}

arr.forEach((e) => {
    console.log("FOREACH: " + e);
});

function f(a, b) {
    return a + b;
}

const arrowF = (a, b) => {
    return a + b;
};

let ucenik = {
    ime: "Petar",
    prezime: "Petrovic",
    tehnologije: ["javascript", "C#"],
};

console.log("Ime ucenika:" + ucenik.tehnologije[0] + "");

let literal = `Ucenik ${ucenik.ime} ${ucenik.prezime} najvise od tehnologija voli ${ucenik.tehnologije[0]}`;
console.log(literal);

const itemDiv = [...document.querySelectorAll("div.item")];

const promeniBojuButton = document.querySelector(".dugme");
promeniBojuButton.addEventListener("click", () => {
    itemDiv.forEach((e) => {
        e.style.backgroundColor = "blue";
    });
});
