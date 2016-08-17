function countChar(s, c)  {

	var total = 0;

	for (var i = 0; i < s.length; i++)
		if (s.charAt(i) == c)
			total++;
		return total;
}

function countBs(s) {
	return countChar(s, "B");
}