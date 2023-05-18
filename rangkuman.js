//let adalah keyword
//hampir sama dengan var

// nested looping adalah pengulangan dalam pengulangan

// .reduce berguna untuk menjumlahkan isi array

// charAt(0) adalah mengambil huruf sesuai index

// function dalam object atau class disebut method()

// text.length menghitung mulai dari 1 bukan 0
// digunakan untuk mengetahui panjang karakter

// Tanda Kutip dua ("") di kombinasikan dengan simbol (+) 
    // sedangkan (`) di kombinasikan dengan ($) dan ({})

// const bigNumber = 2032030213012n; //n pada akhir untuk bigInt

// console.log (typeof person);
// console.log (typeof noAssigned);
// typeof gunanya untuk mengetahui tipe data pada variable

// string built in
//slice
let message1 = "Hello There";
console.log (message1);
let hasil =  message1.slice(0,3); //menghilangkan beberapa karakter dari index 0 sampai index 3 sebagai batas
console.log (hasil);
let hasil2 = message1.slice(0,5);
console.log(hasil2);

//concat
let message2 = "Purwadhika";
let message3 = "Jogja" ;
let result = message2.concat(" ", message3); //menggabungkan kata
console.log(result);

let kataa = "Hello World";
let search = kataa.slice(1, 4);
/*
    search menampung huruf dari "Hello World yang dipotong menggunakan syntax slice"
    slice (1, 4) maksudnya slice "1" memotong dari index(1->e) dan "4" adalah batas potongan
*/
console.log (search);
console.log (kataa.replace(search,""));
// console.log (kataa.replace(search,"")) adalah mengganti isi variable search dengan ""(String kosong)

// cara deklarasi array
let arr = [];
let arr1 = new Array();
let array2 = new Array ("A","B","C","D");
array2[3] = "L"; // replace data array pada index tertentu
// built in
// join
let array3 = new Array ("A", "B", "C", "D", "E");
console.log (array3.join()); // join gunanya untuk menggabungkan array dan berubah menjadi string dengan tambahan koma
console.log (array3.join("")); // parameter ("") digunakan untuk menghilangkan koma(,)
// pop
// gunanya untuk menghapus index akhir pada array
let array4 = ["A", "B", "C", "D"];
console.log (array4.pop()); // menampilkan array yang dikeluarkan
console.log (array4); // menampilkan array setelah ada data yang dikeluarkan

// push
// Berguna untuk memasukkan karakter/number ke index akhir pada array
// bisa juga digunakan untuk menghilangkan beberapa isi pada array
let array5 = ["A", "B", "C", "D"];
console.log (array5.push("F"));
let tampung = [];
tampung.push(array5[2]);
console.log (array5);
array5.push("G"); 
console.log (array5);

//shift
// untuk mengambil index paling depan
let arr10 = ["A","B","C"];
arr10.shift();
console.log (arr10);

//unshift
// untuk menambah index ke paling awal
arr10.unshift("Z");
console.log(arr10);

// sort
// untuk mengurut
let array6 = [2,5,1,3,4];
console.log (array6.sort((a,b) => a - b)); // ascending
console.log (array6.sort((a,b) => b - a)); // descending

//split
let message4 = "Apa Kabar ?";
let hasil3 = message4.split(""); //memisahkan beberapa huruf
console.log (hasil3);

// splice
const fruit = ["Pisang", "Mangga", "Anggur", "Salak"];
fruit.splice (0, 2, "Orange", "Apple");
console.log (fruit);
/* parameter (0) artinya menghilangkan isi mulai pada index 0 sampai index 2
dan menambahkan "Orange dan Apple" menggantikan index yang dihilangkan
*/

//indexOF
let message5 = "Welcome to the new universe";
let hasil4 = message5.indexOf("to"); //index untuk menyatakan pada urutan ke berapa
console.log (hasil4);

let splitStr = str.toLowerCase().split(" ");
console.log (splitStr);
for (let c = 0; c < splitStr.length; c++){
    console.log (splitStr[c]);
    splitStr[c] = splitStr[c].charAt(0).toUpperCase() + splitStr[c].substring(1);
/*
charAt berfungsi untuk memilih huruf tertentu dalam suatu kata, jadi
charAt(0) => menunjuk ke huruf "h" pada "hello" dan "w" pada "world"
toUpperCase adalah untuk membuat huruf menjadi kapital dan
dijumlahkan dengan 
*/
}

//number built in
console.log ("Built in===========")
let number1 = 123;
console.log (number1);
let hasil6 = number1.toString();
console.log (typeof hasil6);

// parseInt mengubah int menjadi string
// parseFloat mengubah int menjad float
let string1 = "1123";
let string2 = "1123.2";
let num1 = parseInt(string1);
let num2 = parseFloat(string2);

// if - else if
// if - else if digunakan apabila terdapat dua kondisi
// chaining condition => if - else if - else
// syntax dibawah merupakan ternary operator yang mempersingkat if- else
console.log (str === "JavaScript" ? "Its JS" : "Its not JS");
let grade = "A";
console.log (
    grade === "A"
    ? "Excellent Result"
    : grade === "B"
    ? "Great Result"
    : grade === "C"
    ? "Good Result"
    : "Invalid"
);

// break gunanya untuk membatasi statement dalam kondisi
// continue untuk skip apabila sesuai kondisi?
    //apabila inisiasi awal sesuai dengan kondisi, maka nilai yang sesuai kondisi akan di skip

// Math
let num3 = Math.floor(num2); // Math.floor untuk pembulatan ke bawah
let num4 = Math.ceil(num2); // untuk pembulatan ke atas
// Math.round pembulatan otomatis ke bawah atau ke atas tergantung kondisi
console.log("Jumlah Selisih hari pada dua tanggal tersebut = "+Math.abs(selisihHari));
//Math.abs adalah nilai absolut untuk menghilangkan nilai negatif
//Math.floor gunanya dibulatkan otomatis ke bawah => ex. nilai = 1,6 hasilnya tetap 1
/*Math.round gunanya dibulatkan tergantung nilainya ex. nilai =1,6 hasilnya jadi 2
 * contoh nilai 1,6 => 2
 * contoh nilai 1,4 => 1 */

//type conversion
let str1 = String(123);
console.log(str1);
console.log(typeof str1);
const nomor = "3" * "3";
console.log(nomor);

let boo1 = Boolean(1); //apabila ada nilai dinyatakan true, sebaliknya dinyatakan false

//date data type 
let now = new Date();
console.log (now);
let def = new Date(0); //deff <- default untuk tanggal javascript dibuat
// get
let d = new Date().getFullYear(); // get adalah mengambil tanggal
//set 
let s = new Date();
s.setFullYear(2057); //ini proses inisiasi sendiri tahun agar tidak default

//string concatenation
// concat adalah penggabungan
let k = "Hello" + " " + "World";
console.log (k);
let l = ("1" + 2);

let o = 2;
o += 5; //hasilnya 7 => o = 2 + 5 = 7
o *= 2; // hasilnya 14

//postfix prefix
let preCounter = 2;
console.log(++preCounter); //prefix hasil setelah di increment
let postCounter = 2;
console.log(postCounter--); //postfix menampilkan nilai sebelum di increment

//equal
console.log (angka1 == angka4); //equal karena membaca dari nilai yang sama
console.log (angka1 === angka4); //strict equality = membaca dari nilai & tipe data sama
//not equal
console.log (angka1 != angka2);
console.log (angka1 !== angka4);

let ganti = text.replace(/a/ig, "*"); // simbol (/ /ig, "") merupakan regex atau mengganti suatu karakter menjadi karakter yang di inginkan
console.log (ganti);

for (let h = lowerWord.length -1; h >= 0; h--){
    /*
    pada kondisi for di atas terdapat vatiable h untuk menampung perulangan yang akan di gunakan
    untuk memisahkan huruf. kenapa h = lowerWord.length-1? karena kita akan menampilkan huruf 
    dari belakang. Sesuai dengan jumlah kata berjumlah 5, jadi apabila ingin 
    perulangan yang akan berhenti jadi akan dikurangi.
    */
        reverse += lowerWord[h];
        console.log(lowerWord[h]); // perulangan menampilkan huruf satu per satu dari belakang
}

// for in mengambil index pada array atau key(property) pada objek
// for of mengambil value pada array atau objek
// for of
// menampilkan array menjadi string 
let fruit1 = ["apple", "Manggo", "anggur"];
for (let fruit of fruit1){
    console.log(fruit);
}
// forEach berguna untuk looping sesuai banyaknya isi array
function tampilGanjilGenap(arr){
    let tampung = [];
    arr.forEach((numb) => {
        tampung.push(numb);
    });
};
let x = [1,2,3,4,5,6,7];
tampilGanjilGenap(x);

// map 
// gunanya untuk memanipulasi isi data array
let arr11 = [1, 2, 3, 4, 5];
let a = arr11.map((item, index) => {
    return item * 2;
});
console.log (a);

// foreach
// gunanya untuk menampilkan isi array
let array7 = [1, 2, 3, 4, 5];
let b = array7.forEach((item, index) => {
    console.log (item);
});
console.log (b); // ini hasilnya undefined karena foreach tidak bisa untuk memanipulasi isi data




// 8 
let kata = "ThE QuiCk BrOwN Fox";
let m = "";

for (let i = 0; i < kata.length; i++) {
    if (kata[i] == kata[i].toUpperCase()) {
        // kata[i] == kata[i].toUpperCase adalah membandingkan huruf pada index dengan huruf 
        // yang awalnya udah uppercase (tergantung pada kondisi)
        m += kata[i].toLowerCase();
    } else {
        m += kata[i].toUpperCase();
    }
}
console.log(m);

// console.log(swap('The Quick Brown Fox')); // tHE qUICK bROWN fOX
// console.log(swap('So, today we have REALLY good day')); // sO, TODAY WE HAVE really GOOD DAY

// // cara kedua
function triangle(n){
    let result = "";
    // menggunakan nested looping => artinya for dalam for
    for (let i = 1; i <= n; i++){
        // console.log (`Index : ${i}`); // menampilkan urutan looping 
        for(let j = 1; j <= i; j++){
            // console.log (j);
            if (j <= 9){
                result += `0${j} `;
            } else{
                result += `${j}`;
            }
        }
        result += "\n";
    }
    console.log (result);

}
console.log (triangle(5))