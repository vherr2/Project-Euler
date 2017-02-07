const factorize = (lim) => {
	if (lim < 1) { return undefined; }
	else if (lim === 1) { return [1] }

	let factorList = factorize(lim - 1);
	let curNum = lim;

	for (let factor of factorList) {
		curNum = (curNum % factor) ? curNum : curNum / factor
	}

	if (curNum > 1) { factorList.push(curNum); }

	return factorList
};

const minProduct = (lim) => {
	return factorize(lim).reduce((x, y) => { return x * y; })
};

// minimum number that is divisible by all positive integers up to 20
console.log(minProduct(20));