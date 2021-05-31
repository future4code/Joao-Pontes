//Exercicio inetrpretação

// Exercicio 1 - São seis passos: 1-não mostra nada, 2 declara null para o array e mostra null 3- mostra o comprimento de 11 
//4- mostra o array [0] que no nosso caso é 3 5- ele fala que meu I + 1 pasa a valer 19 e pede para mostrar 6- ele pega 
// meu array que é 19 e pede para um novo array mostrando o array 7 que é 9

//Exercicio 2
// ele deixa tudo em maiusculo com o toUppercase e replica para todos os A a letra I, e mostra o comprimento da frase
// com a propriedade .lenght frase impressa = SUBI NUM ONIBUS EM MIRROCOS 27

//Exercicio de  codigo 
//**********Exercicio 1*******

const nome = prompt("Digite seu nome")
const mail = prompt("Digite seu e-mail")

console.log("O e-mail " + mail + " foi cadastrado com sucesso. Seja bem-vinda(o), " +nome) // gosto mais dessa
console.log(`O e-mail é ${mail} foi cadastrado com sucesso . Seja bem-vindo(a) ${nome}`) //segunda forma de fazer 

///*********Exercicio2*******

let comidas = ["ovo ", "egg ", "huevo ", "tamago ", "ei "]
console.log("essas sao as comidas " + comidas)

console.log(`Essas sao as minhas comidas preferidas:\n${comidas.toString().replaceAll(",","\n")}`)
comidas.splice(1 ,1)
const comidaPreferida = prompt("Digite sua comida preferida")
comidas.splice(1 ,1, +comidaPreferida)
console.log(comidas)
console.log("Essa é a nova lista:\n" +comidaPreferida)
//ta faltando algo, poderia ter criado uma lista com as comidas e trocado a entrada do usuario, mas tentei
//entender melhor o splice *************

//**********Exercicio3****** 


let listaDeTarefas = []
const tarefa1 = prompt("Digite a primeira tarefa")
const tarefa2 = prompt("Digite a segunda tarefa")
const tarefa3 = prompt("Digite a terceira tarefa")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const menu = prompt("Digite a tarefa que ja realizou :0, 1 ou 2")
listaDeTarefas.splice(menu, 1)
console.log(listaDeTarefas)

//faltou terminar

//tentei fazer eliminando o maximo popssivel de codigo