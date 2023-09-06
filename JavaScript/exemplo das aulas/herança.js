class DispositivoEletronic{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("O dispositivo já está ligado");
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronic{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

let smar = new SmartPhone("sand", "blue", "lss");

console.log(smar);
smar.ligar();
smar.ligar();