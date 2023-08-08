numero = new Array();

for(let i = 0; i <= 100; i++){
    numero.push(i);
}

console.log(numero);

numero.forEach(i => {
    console.log(i);
});

numero.forEach(function(v, i, a){
    console.log(`${i} - ${v * v}`);
})