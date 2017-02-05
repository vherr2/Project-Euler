def mults(n, start, max):
	return [i for i in xrange(start, max) if not i%n]

def multsArr(arr, start, max):
	return sum(set(m for n in arr for m in mults(n, start, max)))

# sum of all multiples of 3 or 5 up to 1000
print multsArr([3, 5], 0, 1000)
