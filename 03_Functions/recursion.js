function isEven (number) {

var positive = number * -1 // incase number is negative

	if (positive % 2 == 0) {
		return true
	} else {
		return false
	}
}