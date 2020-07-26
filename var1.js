//kata kunci Var
var globalVar = 100;

function f(){
    var localVar = 200;

    console.log("Memanggil variabel di dalam fungsi");
    console.log("globalVar:"+globalVar);
    console.log("localVar:"+localVar);
}

f();

console.log("\n Memanggil variabel di luar fungsi");
console.log("globalVar:"+globalVar);