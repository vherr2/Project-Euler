def factorize(num, factors):
	for i in factors:
		if not num%i:
			num /= i
			if num == 1:
				return factors
	factors.append(num)
	return factors

def minFactors(lim):
	factors = []
	for i in xrange(2, lim):
		temp = i
		factors = factorize(i, factors)
	print factors
	return factors

# minimum number that is divisible by all positive integers up to 20
print reduce(lambda x, y: x*y, minFactors(20))
		
