const callbackSucesso = (resultado) => {
    console.log("Sucesso! a operação é par, e a soma é: ", resultado);
}

const callbackErro = (resultado) => {
    console.log("Erro!!! a operação é impar, a soma é: ", resultado);
}

const soma = (a, b, callbackSucesso, callbackErro) => {
    const resultado = a + b;
    if(resultado % 2 === 0){
        callbackSucesso(resultado)
    }else{
        callbackErro(resultado)
    }
}

soma(5, 6, callbackSucesso, callbackErro)