const numbers = [24, 45, 56, 68, 97, 76];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}

// console.log (sum);


function arrayTotal (numbers) {
    let sum = 0;

   for (let i = 0; i < numbers.length; i++) {
      const element = numbers[i];
      sum = sum + element;
  }
  return sum;
}

const total = arrayTotal(numbers);
console.log (total);