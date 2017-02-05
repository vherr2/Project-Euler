def isPalindrome(num):
	return str(num) == str(num)[::-1]

def largestPalindrome(numDigits):
	maxNum = int('9'*numDigits)
	minNum = int('1'+'0'*max(0, numDigits-1))
	factors = [i for i in xrange(minNum, maxNum)]
	maxPalindrome = 0
	for i in factors:
		for j in factors:
			prod = i*j
			if isPalindrome(prod) and prod > maxPalindrome:
				maxPalindrome = prod
	return maxPalindrome

# Return the largest palindrome that is a product of two 3-digit numbers
print largestPalindrome(3)
