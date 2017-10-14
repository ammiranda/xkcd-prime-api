/**
 * Algorithm that returns an array of primes up to the upper limit number
 * provided as a parameter
 * @param {Number} n - The upper limit determining how many primes
 * to populate the array with
 */
const eratosthenes = (n) => {
    let arr = [];
    let upperLimit = Math.sqrt(n);
    let output = [];

    for (let i = 0; i < n; i++) {
        arr.push(true);
    }

    for (let i = 2; i <= upperLimit; i++) {
        if (arr[i]) {
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if (arr[i]) {
            output.push(i);
        }
    }

    return output;
}

/**
 * Function that batches items from an array into sub arrays that are keyed
 * by the page they are hashed into
 * @param {Any} arr - The array of values that will be paginated
 * @param {Number} batchNum - The number of elements that will be batched into
 * a single page, defaults to ten
 */
const paginate = (arr, batchNum = 10) => {
    let output = {
        1: []
    };
    let batchKey = 1;

    for (let i = 0; i < arr.length; i++) {
        if (i !== 1 && i % batchNum === 1) {
            batchKey++;
            output[batchKey] = [];
        }
        output[batchKey].push(arr[i]);
    }

    return output;
}