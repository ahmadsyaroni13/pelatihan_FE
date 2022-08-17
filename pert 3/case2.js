// MEMBUAT PROGRAM UNTUK MEMBALIKAN KATA
// let kata = "jerapah";
// for (let i = 0; i < kata.length; i++) {
//   console.log(`${kata[i]}`);
// }

let kata = "kucing";
let kataTerbalik = "";
for (let i = kata.length - 1; i >= 0; i--) {
  kataTerbalik += kata[i];
}
console.log(kataTerbalik);
