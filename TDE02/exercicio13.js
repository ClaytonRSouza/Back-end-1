function verifNum(num){
    if(num < 0){
        return("Número negativo")
    }else if(num > 0){
        return("Número Positivo")
    } else {
        return("Número é 0")
    }
}

console.log(verifNum(0))