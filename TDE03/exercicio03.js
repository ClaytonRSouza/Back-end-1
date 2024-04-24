function mapearArray(newArr,funcao){
    for(let i = 0; i < newArr.length; i++){
        newArr[i] = funcao(newArr[i]);
    }
    return newArr;
}

console.log(mapearArray([1,2,3,4,5], (e) => e * 2));