			//// JS CH 4 Practice Set Q 1 

		 ///console.log("viju \" ")

		      //  Q 2
		      
		let name="vijay"

		console.log(name.startsWith(`vi`));


		  //  *** for google
		  
		  const sentence = 'The quick brown fox jumps over the lazy dog.';

		const word = 'fox';

		console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
		// Expected output: "The word "fox" is in the sentence"


		const name1 =`vijay Anil chaudhari`;
		const Father =`Anil`;
		console.log(`Your Father Name is "${Father}" ${name1.includes(Father) ? ` he is`  : ` he is not`} Present in there`);

		    // Anather Example  ///
		    
		// const str = "To be, or not to be, that is the     question.";

		// console.log(str.includes("To be")); // true
		// console.log(str.includes("question")); // true
		// console.log(str.includes("nonexistent")); // false
		// console.log(str.includes("To be", 1)); // false
		// console.log(str.includes("TO BE")); // false
		// console.log(str.includes("    ")); // true



		    /// Another Example of Symbol.iterator
		    
		  const str = "THE quick red fox jumped over the lazy dog's back.";

		const iterator = str[Symbol.iterator]();
		let theChar = iterator.next();

		while (!theChar.done && theChar.value !== ' ') {
		  console.log(theChar.value);
		  theChar = iterator.next();
		  // Expected output: "T"
		  //                  "H"
		  //                  "E"
		}



				// Auto nu generato //using Symbol.

		function* countTo(n) {
		  for (let i = 1; i <= n; i++) {
		    yield i;
		  }
		}

		const counter = countTo(5);
		for (const num of counter) {
		  console.log(num);
		}
		// Output: 1
		//         2
		//         3

				// Array using Symbol.iterator //

		const arr = [1, 2, 3];

		const iterator = arr[Symbol.iterator]();
		for (const item of iterator) {
		  console.log(item);
		}
		// Output: 1
		//         2
		//         3

					/// String using Symbol.
		const str = "Hello";

		const iterator = str[Symbol.iterator]();
		for (const char of iterator) {
		  console.log(char);
		}
		// Output: H
		//         e
		//         l
		//         l
		//         o



		    ///  ***  Q  3
		    
		let myName="VIJay";
		console.log(myName.toLowerCase());
		console.log(myName.toUpperCase());

		    /// *** Q 4
		  

		   let str2="Give me amount Rs 1000"
		let amount=str2.slice("Give me amout Rs  ".length)
		// amount=str2.slice(18)  // Enter direct amount 

		console.log(amount);


					// Q5

		let str3="vijay bhai"
		let newstr3=str3.replace("bhai","BHAU");
		console.log(newstr3)
		  

  
