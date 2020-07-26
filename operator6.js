var a =10, b=20;
console.log(`a \t: ${a}`);
console.log(`b \t: ${b}`);
console.log(`a==b \t: ${(a==b)}`);
console.log(`a!=b \t: ${(a!=b)}`);
console.log(`a<b \t: ${(a<b)}`);
console.log(`a>b \t: ${(a>b)}`);
console.log(`a<=b \t: ${(a<=b)}`);
console.log(`a=>b \t: ${(a=>b)}`);

if(a<b){
    console.log('a lebih kecil dari b');
}

var i=a;
while(i<=b){
   console.log(`${i}`);
    i +=2
}