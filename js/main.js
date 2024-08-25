// https://jsdoc.app/

import { capitalize } from "./capitalize.js";

// 1. susirandi DOMinanti elementa
// 2. perskaitai jame esancia informacija

// 1. susirandi DOMinanti elementa
// 2. susikonstruoji nauja HTML (string)
// 3. HTML istatai i norima vieta ir taip
// gauni jauna/jaunus elementus

// 1. susirandi DOMinanti elementa
// 2. ji, arba jame esanti turini - pasalini/modifikuoji

// CRUD:
// create
// read
// update
// delete

const homeDOM = document.getElementById('home');
console.log(homeDOM);

const footerDOM = document.getElementById('main_footer');
console.log(footerDOM);

const linksDOM = document.getElementsByTagName('a');
console.log(linksDOM);

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);

const h2DOM = document.getElementsByTagName('h2');
console.log(h2DOM);

console.log(h2DOM[1]);
console.log(h2DOM[2]);

console.log(document.getElementsByClassName('red'));
console.log(document.getElementsByClassName('section-title'));

console.clear();

const sectionTitleDom = document.getElementsByClassName('section-title');

const sectionTitleDOM = document.getElementsByClassName('section-title');

console.log(sectionTitleDOM);
console.log(sectionTitleDOM.length);

const text1 = sectionTitleDOM[0].textContent;
const text2 = sectionTitleDOM[0].innerText;
console.log(text1);
console.log(text2);
console.log(text1 === text2);
console.log(text1.trim() === text2);

// for (let i = 0; i < sectionTitleDom.length; i++) {
//     console.log(i, sectionTitleDom[i]);
// }

// for (const titleDOM of sectionTitleDom) {
//     console.log(titleDOM);
// }

// const lowerTexts = [];

// for (const titleDom of sectionTitleDom) {
//     console.log(textDOM.textContent.toLowerCase());
//     titleDom.textContent = 'Labas rytas, Lietuva!';
// }

// console.log(lowerTexts);

const lowerTexts = [];

for (const titleDom of sectionTitleDom) {
    titleDom.textContent = capitalize(titleDom.textContent);
}

/**
 * Dvieju skaiciu suma.
 * @param {number} a Pirmasis demuo.
 * @param {number} b Antrasis demuo
 * @returns {number} Suma.
 */


function sum (a, b) {
    return a + b;
}

sum(7, 5)
