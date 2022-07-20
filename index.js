// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const copyCats = [...cats, "Broom"];
    return copyCats;
}
function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
}
function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats;
}
function removeFirstCat(){
    const lastCats = cats.slice(1);
    return lastCats;
}