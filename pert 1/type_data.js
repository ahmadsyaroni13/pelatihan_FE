// STUDI KASUS
// 1. MEMBUAT MESIN UNTUK MENDETEKSI ANGKA BILANGAN GANJIL ATAU GENAP

const angka = 3;
if (angka < 1) {
  console.log(`Error`);
}
if (angka % 2 == 0) {
  console.log(`${angka} merupakan bilangan genap`);
} else if (angka % 2 == 1) {
  console.log(`${angka} merupakan bilangan ganjil`);
}

// 2. MEMBUAT MESIN UNTUK MENDETEKSI JUMLAH HURUF DI DALAM KATA GANJIL ATAU GENAP

// let kata = "ayam goreng ";

// if (kata.length % 2 == 0) {
//   console.log(
//     `kata ${kata} memiliki jumlah huruf ${kata.length} kata, oleh karena itu hasilnya adalah Genap`
//   );
// } else if (kata.length % 2 == 1) {
//   console.log(
//     `kata ${kata} memiliki jumlah huruf ${kata.length} kata, oleh karena itu hasilnya adalah Ganjil`
//   );
// }
