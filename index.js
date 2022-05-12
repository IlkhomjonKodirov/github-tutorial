"use strict";

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(5 / 5);

const x = 27,
 y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log("Hello " + "World");
console.log("Ismim "+'Ilhom');

console.log( 25 + "+ Ajr loyihasi");

const num = 45 + " radio";
console.log(typeof num);
console.log("efirimizda " + num);

let z = 10;
console.log(z++);// soga 1 ni 1 qadam keyin qo'shib natijanin chiqaradi
console.log(z);

let incr = 99;
let decr = 99;
// console.log(++incr);--> Songa 1 ni srazi qo'shib natijani chiqaradi
 //console.log(--decr); --> Sondan 1 ni srazi ayirib natijani chiqaradi
console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(decr);

console.log(23 % 5); // qoldiqni topish

const a = 34,
 b = 3;
console.log(a % b); 

// == va === farqi
// == bu faqat natijani tekshiradi
console.log(2 * 3 == 6); // running: ---> true
console.log(2 * 3 == "6"); // running: ---> true

// === bu ham natijani ham ma'lumot turini ham tekshiradi
console.log(2 * 3 === 6); // running: ---> true;
console.log(2 * 3 === '6'); // running: ---> false;

//&& ---> va degani, || ---> yoki
const isChecked = true,
  isClose = false;

//console.log(isChecked && !isClose); //running---> true, sababi ! belgi not degan mano beradi ya'ni !isClose-notfalse dagani
console.log(isChecked && (isClose || !isChecked));







