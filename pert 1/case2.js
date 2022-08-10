const kata = "harimau";

if (kata.length % 2 == 0) {
  console.log(
    `${kata} adalah bilangan genap karena jumlah huruf nya adalah ${kata.length}`
  );
} else if (kata.length % 2 == 1) {
  console.log(
    `${kata} adalah bilangan ganjil karena jumlah hurufnya adalah ${kata.length}`
  );
}
