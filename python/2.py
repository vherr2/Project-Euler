def fibonacci(lim):
	sum = 0
	idx = 0
	memo = [1, 1]
		
	while max(write_next(memo)) < lim:
		sum += (memo[idx]%2==0)*memo[idx]
		idx = (idx+1)%2
	return sum	

def write_next(pair):
	pair[pair.index(min(pair))] = sum(pair)
	return pair

# Sum of all even fibonacci numbers up to 4 million
print fibonacci(4*(10**6))
