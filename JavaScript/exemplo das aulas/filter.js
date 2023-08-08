numero = new Array();

for(let i = 0; i <= 100; i++){
    numero.push(i);
}

numerosD2 = numero.filter(item => item % 2 === 0);

console.log(numero);

console.log(numerosD2);

/* ===================================================== */

function impares(item){
    if(item % 2 !== 0){
        return item;
    }
}

numerosD0 = numero.filter(impares);

console.log(numero);

console.log(numerosD0);

/* ===================================================== */

numerosD1 = numero.filter(item => {
    return item % 3 === 1;
})

console.log(numero);

console.log(numerosD1);