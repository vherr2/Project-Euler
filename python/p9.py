def pythagorean_triplet(total):
	return [x*y*z for z in xrange(total/3, total-1) 
				for y in xrange(total/6, z) 
				for x in xrange(1, y) if (x**2 + y**2 == z**2) and (x + y + z == total)]

print pythagorean_triplet(1000)