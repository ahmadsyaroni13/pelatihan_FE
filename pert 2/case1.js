// NESTED IF

// CASE 1 ? BUAT PROGRAM UNTUK MENGKATEGORIKAN UMUR,
// 19 KEBAWAH ? REMAJA
// 10 KEBAWAH ? ANAK2
// 65 KEATAS ? LANSIA
// 18 KEATAS ? DEWASA
const umur = 9;
if (umur < 19) {
  if (umur < 10) {
    console.log("ANAK-ANAK");
  } else {
    console.log("REMAJA");
  }
} else {
  if (umur > 65) {
    console.log("LANSIA");
  } else {
    console.log("DEWASA");
  }
}
