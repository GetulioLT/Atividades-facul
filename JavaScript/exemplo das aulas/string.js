let nome = "     Getulio Vagner";

let verificacao = nome.length <= 20 ? "Nome no tamanho adequedo" : "Numero maximo de caracteres ultrapaçados";

console.log(verificacao);

console.log(`O nome ${nome} maisculo: ${nome.toLocaleUpperCase()}`);
console.log(`O nome ${nome} minusculo: ${nome.toLocaleLowerCase()}`);

let posicao = nome.indexOf("Vagner");

console.log(posicao);

let sobrenome = nome.slice(8, );

console.log(sobrenome);

let ultimo_nome = nome.includes("Santos");

console.log(ultimo_nome);

let nome_completo = nome.concat(" Miranda Santos        ")

ultimo_nome = nome_completo.includes("Santos");

console.log(ultimo_nome);

console.log(nome_completo.trim());

let array_nome = nome_completo.trim().split(" ");

console.log(array_nome);

console.log(nome_completo.trim().indexOf("Santos"))

nome = nome_completo.trim().substring(0, 8).concat(nome_completo.trim().slice(23, ))

console.log(nome)

if (nome.startsWith("Getulio")){
    nome = nome.toLocaleUpperCase()
    nome = nome.replace(" ", "|")
}

console.log(nome)