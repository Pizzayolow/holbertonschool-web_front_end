function countPrimeNumbers() {
	let count = 0
	let sum = 0
	let i, j

	for (j = 2; j <= 100; j++) {
		for (i = 1; i <= j; i++) {
			if (j % i == 0)
				count++
		}

		if (count == 2)
			sum += 1
		count = 0
	}

	return sum;

}
let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);

startTime = performance.now();
for (let i = 0; i < 100; i++) {
	countPrimeNumbers();
}
endTime = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`)
