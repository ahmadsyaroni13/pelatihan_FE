// console.log(Math.random() * 1999);
// console.log(Math.ceil(6.389));
// console.log(Math.floor(7.8));
// console.log(Math.round(89.4));
// let angka = 20;
// angka = angka * 20 + angka;
// console.log(angka);
// let kata = "ayam";
// kata = kata + " " + "bakar";
// console.log(kata);

const nama = "Acep";
const nilai = 90;
peringkat = "";

if (nilai > 90 && nilai <= 100) {
  peringkat = "Sangat Bagus";
} else if (nilai > 65 && nilai <= 90) {
  peringkat = "Cukup";
} else if (nilai > 0 && nilai <= 65) {
  peringkat = "Remedial";
}

if (peringkat == "Sangat Bgaus" || peringkat == "Cukup") {
  console.log(
    `${nama} Lulus ujian dengan peringkat ${peringkat} dan nilainya ${nilai}`
  );
} else if (peringkat == "Remedial") {
  console.log(
    `${nama} Tidak Lulus ujian dengan peringkat ${peringkat} dan nilainya ${nilai}`
  );
} else {
  console.log("Error");
}
