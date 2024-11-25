document.getElementById("calculateBtn").addEventListener("click", function () {

    const inputNumber = document.getElementById("numberArray").value;

    const numbers = inputNumber.split(",").map(num => parseFloat(num.trim()));

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    document.getElementById("result").textContent = isNaN(sum) ? "Field is Empty" : `Sum: ${sum}`;

});


// sum of all numbers in the array ........... Java Script Function


/* function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number; // Add each number to the sum
    }
    return sum;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(sumArray(myArray)); */