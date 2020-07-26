//operator aritmatika
var readline = require ('readline-sync');

var a = parseInt(readline.question("Masukkan nilai a\n"));
var b = parseInt(readline.question("Masukkan nilai b\n"));

console.log(`${a}+${b}=${a+b}`);
console.log(`${a}-${b}=${a-b}`);
console.log(`${a}*${b}=${a*b}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log(`${a}**${b}=${a**b}`);