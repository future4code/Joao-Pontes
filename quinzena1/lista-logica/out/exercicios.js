// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  
  const altura = prompt('Digite a altura do seu retangulo')
  const largura = prompt('Digite a largura de seu retangulo')

  console.log(Number(altura) * Number(largura))

}

// Exercício 2
function imprimeIdade() {

  const anoAtual = prompt('Digite o ano em que estamos')
  const anoNasc = prompt('Agora digite o ano em que você nasceu')

  console.log(Number(anoAtual) - Number(anoNasc))
 
}

// Exercício 3
function calculaIMC() {

  const peso = prompt('Digite o seu peso em kg')
  const altura = prompt('Agora digite sua altura em M(pode ser usado uma casa decimal Ex:1.78')

  console.log (peso / (altura * altura))

}

// Exercício 4
function imprimeInformacoesUsuario() {

  const nome = prompt('Digite o seu nome')    
  const idade = prompt('Digite sua idade')
  const email = prompt("Digite seu e-mail")
  
  
  console.log ("Meu nome é " +nome+ ", tenho " + idade + " anos, e o meu email é " +email+ ".")
}


// Exercício 5
function imprimeTresCoresFavoritas() {

  const corUm = prompt('Digite a primeira cor favorita')    
  const corDois = prompt('Digite a segunda cor favorita')
  const corTres= prompt("Digite a terceira cor favorita")

  console.log ([""+corUm+"",""+corDois+"",""+corTres+""])
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
 
  let frase = prompt('Digite a frase')

  console.log(frase.toUpperCase()); 
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custo = prompt("Digite o custo do espetaculo")
  const valorIngresso = prompt("Agora digite o valor de cada ingresso")

  const qtdIngressos = (custo / valorIngresso)

  console.log(qtdIngressos)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Digite aqui o que deseja checar")
  const string2 = prompt("Digite aqui para compararmos")

  console.log(string1.length === string2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite aqui o que deseja checar")
  const string2 = prompt("Digite aqui para compararmos")

  console.log(string1.toUpperCase() === string2.toUpperCase())
}

//Exercicio 10
function checaRenovacaoRG() {
  const anoAtual= prompt('Digite o ano atual')    
  const anoNasc = prompt('Digite o ano de nascimento')
  const anoEmissao= prompt("Digite ao ano de emissão de seu RG")
  
  const idade = (anoAtual - anoNasc)
  const emissao = (anoAtual - anoEmissao)

  console.log((idade <= 20 && emissao >= 5) || (idade > 20 && idade <= 50 && emissao >= 10) ||
   (idade > 50 && emissao >= 15))
  
}

// Exercício 11
function checaAnoBissexto() {

  const anoAtual = prompt("Digite o ano que estamos")
  const resultado = (anoAtual % 400 == 0) || (anoAtual % 4 == 0 && anoAtual % 100 != 0)

  console.log(resultado)
  
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("É maior de 18 anos?")
  const escolaridade = prompt("Possui ensino medio completo")
  const disponibilidade = prompt("Possui disponibilidade exclusiva pro curso")

  console.log(idade =="sim" && escolaridade =="sim" && disponibilidade =="sim");
}