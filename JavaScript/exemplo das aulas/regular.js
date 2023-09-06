function soma(x = 0, y = 0){
    let total = x + y;

    return total;
}

let s1 = soma();

let s2 = soma(1);

let s3 = soma(2, 4);

console.log(s1, s2, s3);

/* ===================================== */

function quadrado(n){
    return n * n;
}

let numeros = [1,2,3,4,5,6,7,8,9,10]

let numeros_quadrados = numeros.map(quadrado);

console.log(numeros_quadrados)

