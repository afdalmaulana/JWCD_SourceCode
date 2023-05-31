function ubahAngka(num){
    const huruf = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let tampung = [];
    num.forEach((ubah) => { //nilai arr sudah di isi dengan let a. ubah adalah di isi dengan arr 
        console.log(ubah);
        tampung.push(huruf[ubah]); // ubah berubah jadi index karena berada dalam => kurung siku index / [];
        console.log (tampung);

        
    })
    return tampung.join("");
};
let a = [10,1, 11, 1, 18, 20, 1, 0, 2, 1, 20, 1, 13];
// (ubahAngka(a));
console.log (ubahAngka(a));

// function ubahAngka(huruf){
//     const angka = ["1","2","3"]
// }