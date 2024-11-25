function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number; // Add each number to the sum
    }
    return sum;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray));