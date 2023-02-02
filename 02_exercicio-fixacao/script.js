// EXERCICIO 01
const minhaIdade = prompt("Qual sua idade?");
const idadeAmiga = prompt("Qual a idade da sua amiga ou amigo?");

const resposta1 = minhaIdade > idadeAmiga;
console.log(`Sua idade é maior que a do seu melhor amigo? ${resposta1}`);

const resposta2 = minhaIdade - idadeAmiga;
console.log(`A diferença de idade é: ${resposta2} anos`);

// EXERCICIO 02
const a = "vou pra praia";
const b = "sou maior de idade";
const c = "posso tomar uma cervejinha";
const d = "quero passear de carro";

const a1 = !b && d;
console.log("resposta a:", a1);

const b1 = b && a && !d;
console.log("resposta b:", b1);

const c1 = a || d;
console.log("resposta c:", c1);

const d1 = c && !d;
console.log("resposta d:", d1);
