
//isEven()

/*function isEven(num){
	// retunn true is even
   if( num % 2 === 0){
   	return true;
   }	
	//return false otherwise
	else{
		return false;
	}
}
*/
//  OR shorter way


function isEven(num){
  return num % 2 === 0;
}


// factorial()

function factorial(num){
	//return a result variable
	var result = 1;
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result = result * i; // or shortcut result *= i;
	}
	// return the result variable
	return result;
}

//factorial (4) 4*3*2*1



// kebabToSnake()

function kebabToSnake(str){
	//replace all '-' with '_'      // find any character replace in string to google it -- Javascript replace character string 

	var newStr = str.replace(/-/g , "_");
	// return str
	return newStr;
 }

