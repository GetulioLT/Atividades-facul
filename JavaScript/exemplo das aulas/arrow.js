let par = (n) => n % 2 == 0;

console.log(par(6));

let impar = (n) => {
    let verificacao = n % 2 != 0 ? "numero impar" : "numero par";
    
    return verificacao;
}

console.log(impar(7));

/* ===================================== */

let numeros = [1,2,3,4,5,6,7,8,9,10]

let quadrados = numeros.map((n) => n * n)

console.log(quadrados)