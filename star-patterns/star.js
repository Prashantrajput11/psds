// pattern 1
// for (let i = 0; i < 5; i++) {
// 	for (let j = 0; j < 5; j++) {
// 		process.stdout.write("*");
// 	}
// }

// pattern 2
// *
// * *
// * * *
// * * * *
// * * * * *
// let rows = 9;
// for (let i = 0; i < rows; i++) {
// 	for (let j = 0; j <= i; j++) {
// 		process.stdout.write("*");
// 	}
// 	process.stdout.write("\n");
// }

// pattern 4
// 1
// 12
// 123
// 1234
// 12345

// pattern 4
// let rows = 5;
// for (let i = 1; i <= rows; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		// prints row number i.e i
// 		process.stdout.write(i.toString());
// 	}
// 	process.stdout.write("\n");
// }

//patter 5

// let rows = 5;

// for (let i = rows; i >= 1; i--) {
// 	for (let j = 1; j <= i; j++) {
// 		// prints row number i.e i
// 		process.stdout.write("*");
// 	}
// 	process.stdout.write("\n");
// }

//pattern 6
// 12345
// 1234
// 123
// 12
// 1
// let rows = 5;

// for (let i = rows; i >= 1; i--) {
// 	for (let j = 1; j <= i; j++) {
// 		// prints row number i.e i
// 		process.stdout.write(j.toString());
// 	}
// 	process.stdout.write("\n");
// }

// pattern 7 - pyramid

//
//      *
//     ***
//    *****
//   *******
//  *********

// 3 loops --> 2 loops for spaces , 1 loop fpr star
// let n = 5;
// for (let i = 0; i < n; i++) {
// 	// for space

// 	for (let j = 0; j < n - i + 1; j++) {
// 		process.stdout.write(" ");
// 	}

// 	// for star

// 	for (let k = 0; k < 2 * i + 1; k++) {
// 		process.stdout.write("*");
// 	}

// 	// for space

// 	for (let j = 0; j < n - i + 1; j++) {
// 		process.stdout.write(" ");
// 	}

// 	process.stdout.write("\n");
// }






//Pattern 11

for(let i = 1 ; i<= 5 ; i++){
   let start = i % 2 !== 0 ? 1 : 0 
    
    
  
  for(let j = 1 ;j <= i ; j++){
    
   
    process.stdout.write(start.toString());
    start = 1- start // to aleter the start value from 0-1 and vice versa
  }
  process.stdout.write("\n");
}


// pattern 13

for(let i = 1 ; i<= 5 ; i++){
 
   
     let char = "A"
  
  for(let j = 1 ;j <= i ; j++){
    
   
    process.stdout.write(char);
   let  currentCharCode  = char.charCodeAt(0) + 1
   let nextCharCode = String.fromCharCode(currentCharCode);
   char = nextCharCode
    
   
   
   
     
  }
  process.stdout.write("\n");
}