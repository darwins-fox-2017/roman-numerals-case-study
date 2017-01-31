function to_roman(num){
  if(typeof num !== 'number') return false;
  var digits = String().split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
  roman_num = "",
  i = 3;
  while(i--)
    roman_num = (key[+digits.pop() + (i*10)]||"")+roman_num;
  return Array(+digits.join("")+1).join("M")+roman_num;
}

console.log(to_roman(4));
console.log(to_roman(9));
console.log(to_roman(13));
console.log(to_roman(1453));
console.log(to_roman(1646));
