// Write your solution here!
const cats=["Milo", "Otis","Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
console.log(destructivelyAppendCat("Ralph"));

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
console.log(destructivelyRemoveLastCat());

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat());

function appendCat(name){
    const newCats=[...cats,name];
    return newCats;
}
console.log(appendCat("Broom"));

function prependCat(name){
    const newCats2=[name,...cats];
    return newCats2;
}
console.log(prependCat("Arnold"));

function removeLastCat(){
    const newCats3=cats.slice(0,cats.length-1);
    return newCats3;
}
console.log(removeLastCat());

function removeFirstCat(){
    const newCats4=cats.slice(1);
    return newCats4;
}
console.log(removeFirstCat());