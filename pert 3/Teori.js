// Indexing
let kata = "Kucing_anggora";
console.log(`index ke ${[7]} adalah ${kata[7]}`);

// Increment dan decrement
// cara ke- 1
let a = 0;
a++;
console.log(`cara ke-1 hasilnya adalah ${a}`);

// cara ke- 2
let j = 0;
j = j + 1;
console.log(`cara ke-2 hasilnya adalah ${j}`);

// cara ke- 3
let k = 0;
k += 1;
console.log(`cara ke-3 hasilnya adalah ${k}`);

// Iteration " ada for dan while"

// While
let ka = 0;
while (ka < 5) {
  console.log(`ini adalah kata ke- ${ka}`);
  ka++;
}

// For
for (let ko = 0; ko < 5; ko++) {
  console.log(`for ko ke- ${ko}`);
}

// Break dan contiunue
// break
for (let i = 10; i > 0; i--) {
  if (i == 4) break;
  console.log(i);
}

// conitnue
for (let i = 10; i > 0; i--) {
  if (i == 4) continue;
  console.log(i);
}
