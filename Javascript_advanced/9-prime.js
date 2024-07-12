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
const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
