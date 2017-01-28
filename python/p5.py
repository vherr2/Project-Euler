def factorize(lim):
	if lim < 1:
		return None
	elif lim == 1:
		return [1]

	factor_list = factorize(lim-1)

	cur_num = lim
	for i in factor_list:
		cur_num = cur_num if cur_num % i else cur_num / i

	if cur_num > 1:
		factor_list.append(cur_num)

	return factor_list

def minProduct(lim):
	return reduce(lambda x, y: x * y, factorize(lim))

# minimum number that is divisible by all positive integers up to 20
print minProduct(20)