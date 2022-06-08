//soal 5
// Pertumbuhan penduduk di kota Bogor tahun ini adalah 30.000, tiap tahun bertambah 3%.
// Berapa tahun yang dibutuhkan untuk mencapai jumlah penduduk 100.000 ? Buat script
// looping dengan for atau while-do.


function pertumbuhan(jumlahPeduduk, pertumbuhan, maxPenduduk) {
    let tahun = 0;
    while (jumlahPeduduk <= maxPenduduk) {
        jumlahPeduduk = jumlahPeduduk + (pertumbuhan / 100) * jumlahPeduduk;
        tahun++;
    }
    return `sekitar ${tahun} tahun jumlah penduduk di kota Bogor sebesar ${jumlahPeduduk} atau sekitar ${maxPenduduk}`;
}

console.log(pertumbuhan(30000, 3, 100000));