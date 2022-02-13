function largestElement (numbers) {
    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 2, 34, 45, 75, 56];
const largestAge = largestElement (ages);
console.log (largestAge);