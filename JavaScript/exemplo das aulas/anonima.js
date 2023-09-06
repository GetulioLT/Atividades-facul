let quadrado = function(n){
    return n * n
}

console.log(quadrado(5))

/* ===================================== */

let numeros = [1,2,3,4,5,6,7,8,9,10]

let quadrados = numeros.map(function(n){
    return n * n
})

console.log(quadrados)