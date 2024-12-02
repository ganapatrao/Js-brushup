12345678

1 -- less than or equal to is not prime
2357

Here's how to check if a number is prime:

If the number is less than or equal to 1, it's not prime.
If the number is 2 or 3, it's prime.
For numbers greater than 3, we only need to check divisibility up to the square root of the number.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpTo(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

// Example usage: Print prime numbers up to 50
printPrimesUpTo(50);