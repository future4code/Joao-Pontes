// Exercicio 1 a-Será impresso 10 e 50
//              b- não vai aprerecer nada, vai dar erro
// Exercicio 2 - não haverá nenhuma saida pois o codigo não buscou a entrada
//aa

//Exercicio 1-a = sem parametros
function meusDados(){
    console.log("Eu sou João Vitor, tenho 33 anos, moro em Indiapora e sou estudante")
}
meusDados()

//Exercicicio 1- b
// nesse não consegui, está retornando undefined 
const nome = prompt("Digite seu nome")
const idade = prompt("Digite sua idade")
const cidade = prompt("Digite sua cidade")
const profissao = prompt("Qual a sua profissão")

function mensagem (nomeA, idadeA, cidadeA, profissaoA){
    console.log("Eu sou", nome ,", tenho", idade, "anos, moro em ", cidade, "e sou " ,profissao)
    
}
console.log("Imprimindo", mensagem())
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function mensagem (nome, idade, cidade, profissao){
    const dados = "Eu sou" +nome+ ", tenho" +idade+ "anos, moro em " +cidade+ "e sou " +profissao
    console.log(dados)
}
console.log(mensagem ("Joao", 33, "Indiapora", "carteiro"))

//Exercicio 2
/*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
 faça a soma das duas entradas e retorne o resultado.
 Invoque a função e imprima no console o resultado.*/
function soma(numero1, numero2){
    somar = (numero1 + numero2)
    return somar
}
console.log(soma(1,2))

/*b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é 
**maior ou igual** ao segundo.*/
function numeros(numero1, numero2){
    verificar =(numero1 >= numero2)
    return verificar
}
console.log(numeros(2,1))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function numeros(numero1){
    verificar =(numero1 % 2 == 0)
    return verificar
}
console.log("O numero é par" ,numeros(3))

//d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, j
//untamente com uma versão dela em letras maiúsculas.
function mensagem(dados){
    letras = "Bruno movio é fera"
    verificar = (letras.toUpperCase() + letras.length)// nao consegui dar espaco entre o tamanho e a frase
    return verificar
}
console.log(mensagem())

/*3-Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
 Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores
  inputados pelo usuário sendo o argumento.
 Por fim, mostre no console o resultado das operações:*/

 const numero1 = Number(prompt("Digite o primeiro numero"))
 const numero2 = Number(prompt("Digite o segundo numero"))

 function somar(numeroA, numeroB){ 
     soma = (numero1 + numero2)
     return soma
 }

 function subtrair(numeroA, numeroB){
    subtração= (numero1 - numero2)
    return subtração
}

function multiplicar (numeroA, numeroB){
    multiplicação = (numero1 * numero2)
    return multiplicação
}

 function dividir(numeroA, numeroB){
    divisao = (numero1 / numero2)
    return divisao
}
console.log(somar(), subtrair(), multiplicar(), dividir())

//obs quando executada somente uma exercicio de cada vez funcionou corretamente, agora juntando tudo 
//dá alguns erros.