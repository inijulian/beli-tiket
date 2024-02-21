function runJS(){
alert (`Beli Tiket Bioskop`)

var nama = prompt("Masukkan Nama Anda");
var umur = prompt("Masukkan Umur Anda");

if (umur >= 13) {
    const studio = prompt("Pilih studio A/B/C");
    alert(`Pembelian Tiket Berhasil, Detail Tiket: \n\nNama ${nama} \nUmur ${umur} \nStudio ${studio}`);
} else {
    alert("Maaf, Umur Anda Belum 13");
}
}