
/*---------------------------------------------------------------------------------------
/  1- False     / 2-Eles vao ser concatenados 1020 pois nao  / 3- A solução é passar    /
/     True      /foi passada a instrução Number              / o parametro number antes /
/     False     / ------------------------------------       / do prompt                /
/     Boolean   /                                            /                          /
------------------------------------------------------------------------------------------
*/
//Exercicio 1

const idadeUser = Number(prompt("Digite sua idade"))
const idadeFriend = Number(prompt("Digite a idade de seu mehor amigo(a)"))
const idadeMaior = (Number(idadeUser) > Number(idadeFriend))
const diferncaIdade = (Number(idadeUser) - Number(idadeFriend))

console.log (prompt("Sua idade é maior do que a do seu melhor amigo?", idadeMaior))
console.log (prompt("Diferença de Idade =", diferncaIdade))

//Exercicio 2

const numeroPar = Number(prompt("Digite um numero Par"))
const divisao = (Number(numeroPar / 2))

console.log(prompt("O resultado da divisao é", divisao))

const restoDivisao = (Number(numeroPar % divisao))// o resto da divisao vai ser sempre 0, pois estamos dividindo por 2

console.log(prompt("Resto da divisao por 2 é ", restoDivisao))
//Nota: quando digitamos um numero impar o sistema faz a divisao e retorna o resultado normalmente, pois não 
// fizemos nenhum tratamento restringndo entradas.

//Exercicio 3

const idadeUsuario= Number(prompt("Digite sua idade em anos Ex: 35 para 35 anos"))
const idadeMeses = (Number(idadeUsuario * 12))
const idadeDias =  (Number(idadeUsuario * 365))
const idadeHoras = (Number(idadeUsuario * 8760))

console.log(prompt("A sua idade em meses é =", idadeMeses))
console.log(prompt("Sua idade em dias é =", idadeDias))
console.log(prompt("Sua idade em horas é =",idadeHoras))

//Exercicio 4


const numero1 = Number(prompt("Digite o primeiro numero"))
const numero2 = Number(prompt("Digite a segundo numero)"))

const numeroMaior = (numero1 > numero2)
const numeroIgual = (numero1 === numero2)

const numeroDiv = (numero1 % numero2)
const divisivel = (numeroDiv === 0)

const numeroDiv2 = (numero2 % numero1)
const divisivel2 = (numeroDiv2 === 0)

console.log(prompt("O primeiro é mai0r que o segundo", numeroMaior))
console.log(prompt("O primeiro é igual o segundo", numeroIgual))
console.log(prompt("O primeiro é divisel pelo segundo", divisivel))
console.log(prompt("O segundo é divisel pelo primeiro", divisivel2))