def pythagorean_triplet(total):
	return [x*y*((x**2 + y**2)**0.5)
				for y in xrange(2, total)
				for x in xrange(1, y) if x+y+((x**2 + y**2)**0.5) == total]

# Product of sides of pythagorean triplet for which sum of sides is 1000
print pythagorean_triplet(1000)