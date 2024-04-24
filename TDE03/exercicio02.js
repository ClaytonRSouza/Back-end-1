function somaElementosPares(array){
    let soma = 0;

    for(let num of array){
        if(num % 2 === 0){
            soma += num;
        }
    }

    return soma;
}

console.log(somaElementosPares([1,2,3,2,5,4]))