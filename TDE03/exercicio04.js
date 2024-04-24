function filtrarArray(array,funcao){
    return array.filter(funcao);
}

function ehPar(num){
    return num % 2 === 0
}

console.log(filtrarArray([1,2,4,6,5], (e) => ehPar(e)))