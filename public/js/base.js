const nome = "Marconi Alves";
let nome2 = ""
let pessoaDefault = {
    nome: "Marconi Alves Pereira",
    idade: "49",
    trabalho: "Eletricista"
}

let nomes = ["Marconi Alves Pereira", "Otavio Moreira", "Jose Silva"];

let pessoas = [
    {
    nome: "Maria silva",
    idade: "25",
    trabalho: "ux ui " 
    },

    {
        nome: "Marconi Alves Pereira",
        idade: "49",
        trabalho: "Eletricista"
    },
    {
        nome: "Jose Silva",
        idade: "38",
        trabalho: "carpinteiro"
    }
];

function alteranome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

adicionarPessoa({
    nome: "Pedro silva",
    idade: "38",
    trabalho: "carpinteiro"
});

console.log(pessoas);

//imprimirpessoa(pessoaDefault);

//imprimirpessoa({
  //  nome: "Mario colt",
    //idade: "49",
    //trabalho: "Armeiro"
//});


//recebeEalteraNome("Joao Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alteranome();