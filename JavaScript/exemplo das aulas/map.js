numero = new Array();

for(let i = 0; i <= 100; i++){
    numero.push(i);
}

console.log(numero);

quadrado = numero.map(item => item * item)

console.log(quadrado);