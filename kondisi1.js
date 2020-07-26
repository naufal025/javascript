var readline = require ('readline-sync');

var x = parseFloat(readline.question('masukkan nilai x: '));
var y = parseFloat(readline.question('masukkan nilai y: '));
var z;

if (y===0){
    console.log('kesalahan : nilai y tidak boleh nol')
    ProcessingInstruction.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);