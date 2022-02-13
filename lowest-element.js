function lowestNumbers (numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}

const ages = [12, 2, 34, 45, 75, 56];
const lowestAge = lowestNumbers (ages);
console.log (lowestAge);