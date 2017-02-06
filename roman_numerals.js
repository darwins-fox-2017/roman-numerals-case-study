/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
	- Dari semua yang saya coba, semuanya masih dapat running di console, namun pada source code roman-numerals_2.js dan roman_numerals_3.js terdapat
	beberapa hasil running yang tidak tepat (bugs).

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
	- Terdapat bugs pada roman-numerals_3.js seperti mengalami kondisi forever looping yang mengakibatkan test-case setelah angka 13 tidak dapat di eksekusi secara sempurna.
	- Pada source-code roman-numerals_2.js terdapat bugs pada semua test-case mengakibatkan output tidak sesuai dengan test-case.

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
  Untuk menghadapi tantangan roman numeral saat itu belum ada

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
  Ya saya mengerti code apa yang ditulis perbaris code

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
  Bisa, dengan cara melihat dokumentasi javascript, yang ada dari w3school atau website developer mozilla

6. Adakah struktur data baru? Apa saja, tolong sebutkan
  Tidak ada

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
  Solusi yang berbeda dari saya adalah tetap menggunakan object mapping tapi memanipulasi data langsung dari perulangan tanpa menambahkan kamus yang ada di dalam object. Karena jika ada nomor baru nantinya, kita tidak perlu menambahkan kamus baru

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
	- Saya lebih memilih roman-numerals_4.js disamping saya bisa mengerti struktur kodenya ditambah penggunaan sintaks yang rapi, terstruktur, juga sedikit karena hanya
	  menggunakan for loop dan while secara keseluruhan hal ini menunjukkan efektifitas progrmming yang baik
9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
	- Jika kita menulis kode yang rapi dan sedikit menggunakan pengulangan akan membuat komputer tidak sibuk harus membaca berkali-kali kode kita dan ini membuat aplikasi bisa down.
10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
    - Yang pasti jika seorang menulisa kode dengan rapi dan terstruktur akan memudahkan pada saat maintenance dikemudiaan hari.
    - Karena proses maintenance merupakan pekerjaan tim dan mungkin saja pekerjaan kita akan di lanjutkan oleh developer lain pada saat maintenance
