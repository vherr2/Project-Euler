def sum_of_squares(n):
	return sum([i**2 for i in xrange(n+1)])

def square_of_sums(n):
	return sum([i for i in xrange(n+1)])**2

def diff(n):
	return square_of_sums(n) - sum_of_squares(n)

# Difference between sum of squares of the first one hundred natural numbers and the square of the sum
print diff(100)
