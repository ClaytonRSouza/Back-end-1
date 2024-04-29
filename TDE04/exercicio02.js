const soma = (a, b, callbackSucesso, callbackErro) => {
    const resultado = a + b;
    if(resultado % 2 === 0){
        callbackSucesso(resultado)
    }else{
        callbackErro(resultado)
    }
}

const calcSomaPar = (a, b) => {
    return new Promise((resolve, reject) => {
        const callbackSucesso = (resultado) => {
            resolve(`Operação concluída com sucesso! O número ${resultado} é par.`);
        };

        const callBackError = (resultado) => {
            reject(`Erro: A operação falhou! O número ${resultado} é ímpar.`);
        };

        soma(a, b, callbackSucesso, callBackError);
    });
};

calcSomaPar(5,25)
    .then((mensagemSucesso) => {
        console.log(mensagemSucesso)
    })
    .catch((mensagemErro) => {
        console.log(mensagemErro)
    }); 
