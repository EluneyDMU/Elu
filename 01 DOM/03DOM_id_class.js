let mainHeadingIdText = document.getElementById("hello").textContent;//ZUGRIFF ÜBER DIE CSS-ID

console.log(mainHeadingIdText);

let mainHeadingClassText = document.getElementsByClassName("ninja")[0].textContent;//ZUGRIFF ÜBER DIE CSS-KLASSE

console.log(mainHeadingClassText);

let TAGName = document.getElementsByTagName("hello P");
console.log(TAGName);
let ID = document.getElementsById("hellol");
console.log(ID);
let Class = getElementsByClassName("ninja");
console.log(Class)

/**
 * 3 ARTEN FÜR DEN ZUGRIFF MIT HILFE VON DOM
 * 1) TAG-Name
 * 2) ID
 * 3) Klasse
 */