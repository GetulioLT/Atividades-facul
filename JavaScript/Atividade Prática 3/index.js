class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá meu nome é ${this.nome} tenho ${this.idade} e trabalho como ${this.cargo}.`);
    }

    trabalhar(){
        console.log(`O Funcionario ${this.nome} está trabalhando agora...`);
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`O Funcionario ${this.nome}, está indo ao ${this.departamento}...`);
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar(){
        console.log(`O Funcionario ${this.nome}, está indo programar ${this.linguagem}...`);
    }
}

gerente = new Gerente("Maria Silva", 35, "Gerente de Projetos", "Desenvolvimento");

desenvolvedor = new Desenvolvedor("João Pereira", 28, "Desenvolvedor Sênior", "JavaScript");

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();