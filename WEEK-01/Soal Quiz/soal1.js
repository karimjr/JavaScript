//soal 1
// Terdapat deret angka sebagai berikut : 12,24,36,48,60
// Buat script program menggunakan looping for untuk menampilkan deret diatas

function deretangka(jumlahangka, kelipatanangka){
    var deret = ''
    for(var i = kelipatanangka; i <= jumlahangka; i+=kelipatanangka){
            deret += i + ' ';
    }
    return deret;
}

console.log(deretangka(60,12));