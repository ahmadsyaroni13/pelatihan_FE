// CASE 2 ? BUAT PROGRAM CUSTOM UNTUK TOKO ONLINE DIMANA ADA KODE BAJU DAN MERKBAJU SERTA HARGA
// Kodebaju ada 3, yaitu 1, 2, dan 3
const kodebaju = 3;

// Merkbaju ada 3, yaitu IMP, PRADA, GUCCI
const merkbaju = "gucci";

// Harga
let harga = 0;

const nama = "Acep";
let qty = 2;

if (kodebaju == 1) {
  if (merkbaju.toUpperCase() == "IMP") {
    harga = 1000;
  } else if (merkbaju.toUpperCase() == "PRADA") {
    harga = 12000;
  } else if (merkbaju.toUpperCase() == "GUCCI") {
    harga = 15000;
  } else {
    console.log("Error");
  }
} else if (kodebaju == 2) {
  if (merkbaju.toUpperCase() == "IMP") {
    harga = 1500;
  } else if (merkbaju.toUpperCase() == "PRADA") {
    harga = 125000;
  } else if (merkbaju.toUpperCase() == "GUCCI") {
    harga = 18000;
  } else {
    console.log("Error");
  }
} else if (kodebaju == 3) {
  if (merkbaju.toUpperCase() == "IMP") {
    harga = 14000;
  } else if (merkbaju.toUpperCase() == "PRADA") {
    harga = 15000;
  } else if (merkbaju.toUpperCase() == "GUCCI") {
    harga = 18000;
  } else {
    console.log("Error");
  }
}
console.log(
  `${nama} membeli ${qty} baju dengan merk ${merkbaju.toUpperCase()} dan kode baju ${kodebaju} dengan total harga ${
    harga * qty
  }`
);
