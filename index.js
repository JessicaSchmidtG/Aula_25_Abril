/*1) Leia o código abaixo
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
*/
//a) O que vai ser impresso no console?
//vai ser impresso no console o número 10 e o número 50.

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
//função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//A função seria executada porém não iria imprimir nada no console.

/*2) Leia o código abaixo
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
//a) Explique o que essa função faz e qual é sua utilidade
//Esta função faz o texto que for passado como parâmetro ficar em letra minúscula e 
//verifica se a palavra cenoura está incluida nele, e retorna este texto editado para a variavél
//outraFuncao. Ela é útil para padronizar a letra do texto para não haver diferença de caixa
//e para localizar algum elemento no texto.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura
    //eu gosto de cenoura, true
//ii.  CENOURA é bom pra vista
    //cenoura é bom pra vista, true
//iii. Cenouras crescem na terra
    //cenouras crescem na terra, false

    // Exercícios de escrita de código

/* 1. Escreva as funções explicadas abaixo:
    a) A função não deve receber nenhum 
    parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/
let meusDados = function(){
    return ("Eu sou Jéssica,tenho 30 anos, moro em São Leopoldo e sou estudante");
}
console.log(meusDados());

/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de 
uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string).
Ela deve retornar uma string que unifique todas as informações da pessoa em uma só
mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/
function dados(){
    let nome = prompt("Digite seu nome:");
    let idade = prompt("Digite sua idade:");
    let cidade = prompt("Informe sua cidade:");
    let profissao = prompt("Informe sua profissão:");
    let template = ("Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e sou "+profissao);
    return template;
}
console.log(dados());

/*2. Escreva as funções explicadas abaixo:
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
    faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/
function soma(valorPoup,valorSal){
    let caixa = valorPoup+valorSal
    return caixa
}
let saldo = soma(157.50,1302.00);
console.log("Você tem R$ " + saldo);

  /*  b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número
     é **maior ou igual** ao segundo.*/
function maiorMenor(a,b){
    if (a>=b){
        return (a+" é maior que "+ b);
    }else{
        return (a+" é menor que "+ b);
    }
} 
console.log(maiorMenor(5,6));
console.log(maiorMenor(8,4));
    
   /* c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
   */
function parImpar(c){
    if (c%2===0){
        return (c +" é um número par");
    }else{
        return (c +" é um número ímpar");
    }
}
console.log(parImpar(8));
console.log(parImpar(7));

   /* d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
     juntamente com uma versão dela em letras maiúsculas.
*/
function mensagem(texto){
    return texto.toUpperCase() + ' - tamanho: ' + texto.length;
  
}

console.log(mensagem('Olá tudo bem'));

/* 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados
pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
*/
let d = parseInt(prompt("Informe um número:"));
let e = parseInt(prompt("Informe outro número:"));

function somar(d,e){
    let resultSoma = d+e;
    return resultSoma;
}
function subtracao(d,e){
    let resultSub = d-e;
    return resultSub;
}
function multiplicar(d,e){
    let resultMulti = d*e
    return resultMulti;
}
function divisao(d,e){
    let resultDivisao = d/e;
    return resultDivisao;
}

console.log("Números inseridos: "+d+" e "+e );
resposta1 = somar(d,e)
console.log("Soma: "+resposta1);

resposta2 = subtracao(d,e);
console.log("Subtração: "+resposta2);

resposta3 = multiplicar(d,e);
console.log("Multiplicação: "+resposta3);

resposta4 = divisao(d,e);
console.log("Divisão: "+resposta4);

// DESAFIOS

/*Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código 
através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também.
Sua tarefa é escrever duas funções
a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
*/
const nomeCompleto = (nome,sobrenome) => {
    return nome + ' '+sobrenome;
}
console.log()
