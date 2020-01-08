// Classes e extensão das mesmas

class List{
    constructor(){
        this.data = [];
    }

    addData(data){
        this.data.push(data);
    }
}

class TodoList extends list{

    constructor(){
        super();

        this.usuario = 'Tiago';
    }

}

let MinhaLista = new TodoList();let MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function(){
    MinhaLista.addTodo();
}

//Variável constante
const a = 1;

//Variável let
let y = 2;

//Arrays

const arr = [1, 3, 4, 5, 8, 9];

//funcao map: percorre os itens de um array e executa uma ação
const newArr = arr.map(function(item, index){
    return item + index;
});

//reduce
const sum = arr.reduce(function(total, next){
    return total + next;
})

//filter: retorna determinado valor de um array
const filter = arr.filter(function(item){
    return item % 2 === 0;
})

//find: encontrar um determinado item de um array
const find = arr.find(function(item){
    return item === 4;
})

// arrow function
const newArr = arr.map((item, index) => {
    return item + index;
});

const teste = () => {

}

// REST: considera o resto do objeto que não foi especificado
const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const {nome, ...resto} = usuario;

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

function soma(...params){
    return params.reduce((total, next) => total + next );
}

// SPREAD: organiza mais de um array em um escopo
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

const usuario = {
    nome: 'Tiago',
    idade: 23,
    empresa: 'Egali'
};

const usuario2 = {...usuario1, nome: 'Gabriel'};

//Template string
const nome = "Tiago";
const idade = 23;

console.log('Meu nome é ${nome} e tenho ${idade} anos.');

// Object short sintax
const nome = "Tiago";
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: "egali"
}
    


