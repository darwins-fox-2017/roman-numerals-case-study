var to_roman = function(num){
  // Create arrays with defaults conversion with matching indices
  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  // Create a copy of num to work on and an empty string variable for the final roman number
  var numCopy = num;
  var romanized = '';

  // While decimal number is greater than 0
  while(numCopy>0){
    // Loop through the indices of decimalValue array.
    for(var index = 0; index<decimalValue.length ; index++){
        // Get the maximum decimal number less or equal than the decimal number
        if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy){
          // Ad the Roman numeral & decrease numCpy by the decimal equivalent
          romanized += romanNumeral[index];
          numCopy -= decimalValue[index];

        }
    }
  }
  return romanized;
}

console.log(to_roman(1453) == "MCDLIII")
console.log(to_roman(1646) == "MDCXLVI")
console.log("IV | ", to_roman(4));
console.log("XI | ", to_roman(9));
console.log("XIII | ", to_roman(13));
console.log("MCDLIII | ", to_roman(1453));
console.log("MDCXLVI | ", to_roman(1646));
