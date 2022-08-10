// const dadu = Math.ceil(Math.random() * 6);

// switch (dadu) {
//   case 1:
//     console.log(`dadu anda bernilai 1, maka anda tidak mendapatkan jakpot`);
//     break;
//   case 2:
//     console.log(`dadu anda bernilai 2, maka anda tidak mendapatkan jakpot`);
//     break;
//   case 3:
//     console.log(`dadu anda bernilai 3, maka anda tidak mendapatkan jakpot`);
//     break;
//   case 4:
//     console.log(`dadu anda bernilai 4, maka anda tidak mendapatkan jakpot`);
//     break;
//   case 5:
//     console.log(`dadu anda bernilai 5, maka anda tidak mendapatkan jakpot`);
//     break;
//   case 6:
//     console.log(`dadu anda bernilai 6, maka anda  mendapatkan jakpot`);
//     break;
// }

const kunciJawaban1 = "A";
const kunciJawaban2 = "A";
const kunciJawaban3 = "C";
const kunciJawaban4 = "B";

const jawaban1 = "A";
const jawaban2 = "A";
const jawaban3 = "C";
const jawaban4 = "B";

let nilai = 0;
switch (jawaban1) {
  case kunciJawaban1:
    nilai = nilai + 25;
    break;
  default:
    console.log("Jawaban anda salah");
    break;
}
switch (jawaban2) {
  case kunciJawaban2:
    nilai = nilai + 25;
    break;
  default:
    console.log("Jawaban anda salah");
    break;
}
switch (jawaban3) {
  case kunciJawaban3:
    nilai = nilai + 25;
    break;
  default:
    console.log("Jawaban anda salah");
    break;
}
switch (jawaban4) {
  case kunciJawaban4:
    nilai = nilai + 25;
    break;
  default:
    console.log("Jawaban anda salah");
    break;
}
console.log(`Nilai anda adalah ${nilai}`);
