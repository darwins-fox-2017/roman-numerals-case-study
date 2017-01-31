function to_roman(num){
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "MC", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  for(var i = 0; i<=decimal.length; i++){
    while(num%decimal[i] < num){
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}

console.log("IV | ", to_roman(4));
console.log("XI | ", to_roman(9));
console.log("XIII | ", to_roman(13));
console.log("MCDLIII | ", to_roman(1453));
console.log("MDCXLVI | ", to_roman(1646));
