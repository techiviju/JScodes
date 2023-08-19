   			********  FIBONACCI SERIES  *********

		let term = 5, a = 0, b = 1, c = 0;

		for (let i = 0; i < term; i++) {
		    console.log(a + " ");
		    c = a + b;
		    a = b;
		    b = c;
		}
