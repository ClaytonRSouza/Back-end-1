function encontrarMaiorElemento (array){

    let maiorElemento = 0;

    for(let num of array){
        if(maiorElemento < num){
            maiorElemento = num;
        }
    }
    return maiorElemento;
}

console.log(encontrarMaiorElemento([1,2,3,9])) 

