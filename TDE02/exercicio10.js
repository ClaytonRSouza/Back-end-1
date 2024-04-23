function fatorial(num){
    if(num === 0 || num === 1){
        return num * 1
    }else{
        let resultado = 1
        for(i = 2; i <= num; i++){
            resultado *= i
        }
        return resultado
    }
}

console.log(fatorial(5))