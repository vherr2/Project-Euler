const isPalindrome = (num) => {
	return num.toString().split("").reverse().join("") === num.toString();
};

const largestPalindrome = (numDigits) => {
	let maxNum = parseInt('9'.repeat(numDigits));
	let minNum = parseInt('1' + '0'.repeat(numDigits-1));
	let palindrome = []

	factors = [...Array(maxNum-minNum+1).keys()].map((n) => (n+minNum));

	for (i of factors) {
		for (j of factors) {
			prod = i * j;
			if (isPalindrome(prod)) {
				palindrome.push(prod);
			}
		}
	}

	return Math.max(...palindrome);
};

// Return the largest palindrome that is a product of two 3-digit numbers
console.log(largestPalindrome(3));