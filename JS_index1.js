let number = 12345;
let rev = 0;
while (number != 0) {
  let rem = number % 10;
  rev = rev * 10 + rem;
  number = Math.floor(number / 10);
}
console.log(rev);
