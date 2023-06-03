// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(name){
    return cats.push(name)
}
destructivelyAppendCat(Ralph)


function destructivelyPrependCat(cat){
    return cats.unshift(cat)
}
function destructivelyRemoveLastCat(name){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let newcats;
    return  newcats = [...cats, name]
}

function prependCat(name){
    let newcats;
    return  newcats = [name, ...cats]
}
function removeLastCat(){
    let new_cats = [...cats]
    new_cats.pop()
    return new_cats
}
function removeFirstCat(){
    let new_cats = [...cats]
    new_cats.shift()
    return new_cats
}