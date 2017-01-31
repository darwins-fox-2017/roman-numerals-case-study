// roman_numerals_1.js

// var roman   = new Array();
// roman       = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
// var decimal = new Array();
// decimal     = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//
// function to_roman(value) {
//   if(value <= 0 || value >= 4000) return value;
//   var romanNumeral = "";
//   for(var i = 0; i < roman.length; i++) {
//     while(value >= decimal[i]) {
//       value -= decimal[i];
//       romanNumeral += roman[i];
//     }
//   }
//   return romanNumeral;
// }
//
// console.log("My totally sweet testing script for new roman\n");
// console.log("input | expected | actual");
// console.log("———|—————|———");
// console.log("4     | IV       | ", to_roman(4));
// console.log("9     | IX       | ", to_roman(9));
// console.log("13    | XIII     | ", to_roman(13));
// console.log("1453  | MCDLIII  | ", to_roman(1453));
// console.log("1646  | MDCXLVI  | ", to_roman(1646));

// roman_numerals_2.js

// function to_roman(num) {
//   if(typeof num !== 'number')
//     return false;
//
//   var digits = String(+num).split(""),
//     key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
//            "","X","XX","XXX","XL","L","LX","LXXX","XC",
//            "","I","II","III","IV","V","VI","VII","VIII","IX"],
//     roman_num = "",
//     i = 3;
//     while(i--)
//       roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
//       return Array(+digits.join("") + 1).join("M") + roman_num;
// }
//
// console.log("My totally sweet testing script for new roman\n");
// console.log("input | expected | actual");
// console.log("———|—————|———");
// console.log("4     | IV       | ", to_roman(4));
// console.log("9     | IX       | ", to_roman(9));
// console.log("13    | XIII     | ", to_roman(13));
// console.log("1453  | MCDLIII  | ", to_roman(1453));
// console.log("1646  | MDCXLVI  | ", to_roman(1646));

// roman_numerals_3.js

// var to_roman = function(num) {
//   // Create arrays with default conversion with matching indices.
//   var decimalValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
//   var romanNumeral = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
//
//   // Create a copy of num to work and an empty string variable for the final roman number
//   var numCopy   = num;
//   var romanized = '';
//
//   // While the decimal number is greater than 0,
//   while(numCopy > 0) {
//     // Loop through the indices of the decimalValue array.
//     for(var index = 0; index < decimalValue.length; index++) {
//       // Get the maximum decimal number less or equal then the decimal number.
//       if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1] > numCopy) {
//         // Add the Roman numeral & decrease numCopy by the decimal equivalent.
//         romanized += romanNumeral[index];
//         numCopy   -= decimalValue[index];
//       }
//     }
//   }
//   return romanized;
// };
//
// console.log("My totally sweet testing script for new roman\n");
// console.log("input | expected | actual");
// console.log("———|—————|———");
// console.log("4     | IV       | ", to_roman(4));
// console.log("9     | IX       | ", to_roman(9));
// console.log("13    | XIII     | ", to_roman(13));
// console.log("1453  | MCDLIII  | ", to_roman(1453));
// console.log("1646  | MDCXLVI  | ", to_roman(1646));

// roman_numerals_4.js

// function to_roman(num) {
//   var result  = '';
//   var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//   var roman   = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
//
//   for(var i = 0; i <= decimal.length; i++) {
//     while(num % decimal[i] < num) {
//       result += roman[i];
//       num    -= decimal[i];
//     }
//   }
//   return result;
// }
//
// console.log("My totally sweet testing script for new roman\n");
// console.log("input | expected | actual");
// console.log("———|—————|———");
// console.log("4     | IV       | ", to_roman(4));
// console.log("9     | IX       | ", to_roman(9));
// console.log("13    | XIII     | ", to_roman(13));
// console.log("1453  | MCDLIII  | ", to_roman(1453));
// console.log("1646  | MDCXLVI  | ", to_roman(1646));

/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
   Answer:
   Semua bisa di eksekusi, namun ada beberapa yang ketika di eksekusi tidak berjalan sesuai dengan ekspektasi.
   Beberapa roman_numerals yang ketika di eksekusi tidak sesuai dengan ekspektasi diantaranya "roman_numerals_2.js" dan "roman_numerals_3.js".
   Adapun cara untuk memverifikasi adalah sebagai berikut:
   - Memverifikasi dengan menggunakan syntax "node roman_numerals_x.js" untuk eksekusi program.
   - Memverifikasi kesalahan dapat ditemukan dari output yang dihasilkan, dari code yang dibuat ekspektasi output nya terdapat pada tabel "actual".
   - Memverifikasi dengan membaca dan memahami variable, class, function dan method yang digunakan.

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
   Answer:
   Ada, untuk solusi code yang mengandung bugs terdapat di "roman_numerals_3.js" dan terletak pada looping while yang tidak ada hentinya sehingga menimbulkan infinite loop.
	 Adapun cara memverifikasi yaitu dengan "console.log()" di dalam nested loop didalam if.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
   Answer:
   Menurut saya, tidak ada sintaks baru yang saya temui, namun untuk operator + didepan variabel saya baru lihat karena tidak pernah saya gunakan dan
   untuk method Array saya juga baru lihat.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
   Answer:
   Untuk "roman_numerals_1.js" dan "roman_numerals_4.js" saya dapat membaca dan memahami algoritma dan main logic nya. Untuk roman_numerals_2.js dan roman_numerals_3.js agak sulit untuk dipahami.
   Selain itu juga karena menggunakan operator + didepan variabel dan method Array yg baru saya temui.

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
   Answer:
   Untuk kedepan saya akan usahakan menggunakan syntax seperti case roman numerals tersebut.
   Dan untuk melakukan kondisi perulangan, saya akan pahami lebih dalam lagi penggunaan "for-while".

6. Adakah struktur data baru? Apa saja, tolong sebutkan
   Answer:
   Struktur data baru yang saya temukan yaitu:
   - Penggunaan new Array(); karena biasanya untuk penggunaan array methods menggunakan tanda "[]".
   - Penggunaan + didepan variabel dan method Array();

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
   Answer:
   Dari berbagai solution code yang saya lihat "roman_numerals_1.js" dan "roman_numerals_2.js" memiliki kemiripan, yaitu dengan menggunakan "for-loop" dan "while" untuk mengurangi value
   dan menambahkan roman numeral ke dalam string kemudian mulai iterasi berikutnya.
   Dan untuk "roman_numerals_2.js" dan "roman_numerals_3.js" menurut saya sangat berbeda,
   terutama untuk "roman_numerals_2.js" karena agak sulit untuk dipahami codenya.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
   Answer:
   Solusi pada "roman_numerals_1.js" menurut saya yang terbaik karena mudah dipahami dan solusi codenya lebih readable,
   sehingga nanti di dunia kerja mengerjakan project dapat dikerjakan bersama-sama dengan team yang lain.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
   Answer:
   Pola atau pattern pada solution code yang ada berpengaruh pada performa aplikasi. Karena dengan menggunakan code yang singkat dan pola yang baik akan
   mempercepat proses komputer.
   Dan kondisi yang sangat mempengaruhi performa aplikasi sangat terlihat pada "roman_numerals_3.js" yang melakukan looping secara terus menerus.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    Answer:
    Menurut saya untuk maintenance code dari pola atau pattern yang baik akan jauh lebih mudah bagi team yang lainnya.
    Saya sangat yakin dengan penulisan code yang tertata dengan baik dan readable akan membuat team menjadi lebih cepat dalam menyelesaikan project.
*/
