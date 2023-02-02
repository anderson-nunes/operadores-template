//CODIGO AQUI

let saldo;

//Operação número 1
saldo = 15;
saldo = saldo + 22.4;
console.log(`Valor do saldo após a primeira operação: ${saldo}`);

//Operação número 2
saldo = saldo - 12.34;
console.log(`Valor do saldo após a segunda operação: ${saldo}`);

//Operação número 3
saldo = saldo / 3;
console.log(`Saldo de cada irmão: ${saldo}`);

//Operação número 4
saldo = saldo * 3.42;
console.log(`Meu saldo após o investimento foi: ${saldo}`);

//Operação número 5
//saldo assumirá o valor do RESTO da divisão do dinheiro por 3
saldo = saldo % 3;
console.log(`Agora eu tenho ${saldo} para comprar meus dadinhos`);

//Precedência aritmética
console.log(2 * 2 + 2);
console.log(2 * (2 + 2));

// Prática guiada 2
const resultado1 = 5 === 5;
console.log(resultado1);

const resultado2 = 5 !== 5;
console.log(resultado2);

const resultado3 = 5 !== "5";
console.log(resultado3);

const resultado4 = "5" === "cinco";
console.log(resultado4);

const resultado5 = typeof 5 === typeof 20;
console.log(resultado5);

const resultado6 = typeof "5" === typeof "cinco";
console.log(resultado6);

//Prática guiada 3

const primeiroNumero = 15;
const segundoNumero = 24;

//comparação
const compara1 = primeiroNumero === segundoNumero;
console.log(compara1);

//comparação 2
const compara2 = primeiroNumero <= segundoNumero;
console.log(compara2);

//comparação 3
const compara3 = primeiroNumero > segundoNumero;
console.log(compara3);

//comparação 4
const compara4 = primeiroNumero < segundoNumero;
console.log(compara4);

//Prática guiada 4

// a: Quero dirigir um Celta 2012;
// b: Sou maior de idade;
// c: Consigo comprar o Celta por 22.000 reais;
// d: Consigo alugar o Celta;
// e: Tenho carteira de motorista;

// Quero dirigir o Celta 2012 => a
// Não sou maior de idade => !b
// Sou maior de idade e não tenho carteira de motorista => b && !e
// Sou maior de idade e consigo comprar ou alugar o Celta => b&& c || d
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta => b && !a
