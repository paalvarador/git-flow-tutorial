const operations = require("./operations");

const greetings = (name, email) => {
  return `Welcome ${name}, your email is ${email}`;
};

const greeting = greetings("Pablo Alvarado", "paalvarador@gmail.com");

console.log(greeting);
console.log(`la suma de 3 + 4 es igual a ${operations.sumar(3, 4)}`);
console.log(`La reta de 3 - 4 es igual a ${operations.restar(3, 4)}`);
console.log(
  `la multiplica de 3 * 4 es igual a ${operations.multiplicar(3, 4)}`
);
console.log(`La division de 3 / 4 es igual a ${operations.dividir(3, 4)}`);
