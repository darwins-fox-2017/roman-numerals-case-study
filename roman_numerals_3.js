var to_roman = function(num) {

  // Create arrays with default conversion with matching indices
  var decimalValue = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanNumeral = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

  // Create a copy of num to work an and an empty string variable for the final number
  var numCopy = num;
  var romanized = '';

  // While the decimal number is greater than 0,
  while (numCopy > 0) {
    // Loop through the indices of the decimalValue = Array
    for (var index = 0; index < decimalValue.length; index++) {
      // Get the maximum decimal number less or equal then the decimal number
      if (+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
        // Add the Roman numeral & decrease numCopy by the decimal equivalent
        romanized += romanNumeral[index]
        numCopy -= decimalValue[index]
      }
    }

    return romanized
  }
};

console.log("My totally sweet testing script\n");
console.log("input | expected | actual");
console.log("______|__________|_______");
console.log("4     | IV       | ", to_roman(4))
console.log("9     | IX       | ", to_roman(9))
console.log("13    | XIII     | ", to_roman(13))
console.log("1453  | MCDLIII  | ", to_roman(1453))
console.log("1646  | MDCXLVI  | ", to_roman(1646))
