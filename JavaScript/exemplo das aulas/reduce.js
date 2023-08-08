numero = new Array();

for(let i = 0; i <= 100; i++){
    numero.push(i);
}

console.log(numero);

soma = numero.reduce((n1, n2) => n1 + n2)

console.log(soma);