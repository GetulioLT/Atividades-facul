class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    apresentar(){
        console.log(`Olá me chamo ${this.nome} ${this.sobrenome}`);
    }
}

let getulio = new Pessoa("Getulio", "Vagner");

getulio.apresentar();