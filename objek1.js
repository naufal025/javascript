/*
//membuat tipe objek
function segitiga(a,t){
     this.alas=a;
     this.tingii=t;
}

segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}

//membuat objek dari tipe segitiga
let obj=new segitiga(4,5);

console.log("Sebelum nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);

//mengubah nilai properti alas dan tinggi
obj.alas=10;
obj.tinggi=12;

console.log("Setelah nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);
*/

//membuat objek segitiga
let obj={
    alas:7,
    tinggi:8,
    luas:function(){
        return this.alas*this.tinggi/2;
    }
};

console.log("Sebelum nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);

//mengubah nilai properti alas dan tinggi
obj.alas=20;
obj.tinggi=15;

console.log("Setelah nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);





