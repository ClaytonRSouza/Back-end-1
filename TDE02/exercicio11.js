function somaPar() {
    let soma = 0
    for (i = 2; i <= 100; i++) {
        if (i % 2 === 0) {
            soma += i
        } 
    }
    return soma
}

console.log(somaPar())
