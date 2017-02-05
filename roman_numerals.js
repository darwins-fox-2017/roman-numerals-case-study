/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
Jawaban:
   Semua solusi kode yang ada bisa dijalankan, pada solusi kode no-3 menjalankan output yang agak berbeda.
   Memverifikasi setiap kode dengan console.log atau debugger (sehingga menemukan bug dalam kode)

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Jawaban:
   Roman_numeral_3.js memiliki bug, cara memverifikasi yang dipilih adalah console.log()

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Jawaban:
   Ada,
   - pada roman_numeral_2  Line 12 -> roman_num = (key[+digits.pop() + (i * 10)] || "")
   - pada roman_numeral_2  Line 13 -> return Array(+digits.join("") + 1).join("M") + roman_num
   - pada roman_numeral_3 -> if (+decimalValue[index] <= numCopy .... ....)

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Jawaban:
   Ada beberapa line yang belum begitu saya pahami 100%, namun akan saya pelajari & gali lebih jauh mengenai syntax Javascript

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Jawaban:
   Saya akan selalu berusaha menggunakan sintaks yang refactor-able dalam setiap project yang saya buat,
   tentu saya juga menggunakan sintaks yang baru saya temui dan saya gunakan di project berikutnya

6. Adakah struktur data baru? Apa saja, tolong sebutkan
Jawaban:
   Tidak ada

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Jawaban:
   Solusi kode yang ke empat merupakan kode yang paling mudah dipahami dan singkat secara penulisan dibanding dengan ketiga solusi kode yang lain.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solusi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Jawaban:
   Solusi terbaik adalah solusi kode ke empat karena memiliki sintaks yang juga mudah dipahami dan alur logikanya sederhana

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
Jawaban:
    Less code line, Less process. Mengukur waktu proses kode Javascript dengan console.time()
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
Jawaban:
    Semakin readable suatu kode, maka semakin mudah tim yang lain yang akan mengembangkan aplikasi telah dibuat sebelumnya
*/
