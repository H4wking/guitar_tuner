function tune(arr) {
	var freq = [329.63, 246.94, 196, 146.83, 110, 82.41];
	var res = [];

	for (let i = 0; i < 6; i++) {
		if (arr[i] == 0) {
			res.push("-");
			continue;
		}

		let d = 1 - arr[i] / freq[i];
		if (d == 0) {
			res.push("OK");
		} else if (d > 0 && d < 0.03) {
			res.push(">•");
		} else if (d < 0 && d > -0.03) {
			res.push("•<");
		} else if (d >= 0.03) {
			res.push(">>•");
		} else if (d <= -0.03) {
			res.push("•<<");
		}
	}

	return res;
}
