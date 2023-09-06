let pessoa = {
    nome : 'Getulio',
    idade : 22
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa["idade"]);

let funcionario = new Object();

funcionario.nome = "João";
funcionario["idade"] = 25;

console.log(funcionario);
console.log(funcionario.nome);
console.log(funcionario["idade"]);

function adicionar(nome,sobrenome, idade) {

    return {
        nome, 
        sobrenome,
        idade
    }
}

let pessoas = new Array();

for(let i = 0; i < 3; i++) {
    pessoas.push(adicionar("José", "Maria", 25));
}

console.log(pessoas);