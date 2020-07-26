let readline = require('readline-sync');
class Segitiga{

    constructor(a,t){
        this.alas=a;
        this.tinggi=t;
    }

    luas(){
        return this.alas*this.tinggi/2;
    }

    cetakPropert(){
        console.log(`alas\t:${this.alas}`);
        console.log(`tinggi\t:${this.tinggi}`);
    }
}

class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        super(a,t);//memanggil konstruktor kelas segitiga
        //mendefiniskan properti baru
        this.warna=w;
    }

    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`warna\t:${this.warna}`);
    }
}
//membaca data alas dan tinggi
let a = parseFloat(readline.question("Masukkan Nilai alas:"));
let t = parseFloat(readline.question("Masukkan Nilai tinggi: "));
//membuat objek dari kelas SegitigaWarna
let obj = new SegitigaWarna(a,t,'merah');
obj.cetakPropert;

//memanggil metode luas
console.log(`luas\t;${obj.luas()}`);

   