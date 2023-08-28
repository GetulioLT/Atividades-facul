for(let i = 0; i < 10; i++){
    console.log(i);
}

let pessoas = [
    {nome : "Getulio", idade : 22},
    {nome : "Alexandre", idade : 22},
    {nome : "Daniel", idade : 20}
];

for(let pessoa in pessoas){
    // Com a interação de in, irá pegar apenas o indice de posição
    console.log(pessoas[pessoa].idade);
}

for(let pessoa of pessoas){
    // Com a interação de of, irá pegar os valores
    console.log(pessoa.nome);
}