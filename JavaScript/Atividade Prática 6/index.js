let rdSynk = require("readline-sync");

let bebida = rdSynk.question("Qual bebida voce quer? ");

let valor = 0;

switch(bebida){
    case "cafe":
        valor = 5;
        break;
    
    case "leite":
        valor = 3;
        break;
    
    case "cha":
        valor = 2.5;
        break;
    
    default:
        valor = 0;
        break;

}

if(valor === 0){
    console.log("Item escolhido não existe na lista, temos: café, leite e chá.");
}else{
    console.log(`O item escolhido foi: ${bebida} e você deve pagar: ${valor.toFixed(2)}`);
}