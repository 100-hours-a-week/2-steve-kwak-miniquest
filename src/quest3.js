function sumArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
