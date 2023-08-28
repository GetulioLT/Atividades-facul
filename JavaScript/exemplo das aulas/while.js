let rdSynk = require("readline-sync");

let numero = 0;

while(true){
    console.log(`Numero atual: ${numero}`);

    let escolha = rdSynk.question("Quer continuar contando(s/n)? ");

    switch(escolha){
        case "s":
            numero += 1;
            continue;
        case "n":
            break;
    }
    break;
}

var escolha = rdSynk.question("Quer começar a contagem(s/n)? ");

do{
    switch(escolha){
        case "s":
            numero += 1;
            break;
    }
    console.log(`Numero atual: ${numero}`);

    var escolha = rdSynk.question("Quer continuar contando(s/n)? ");
}while(escolha != "n")