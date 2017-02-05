/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?

solution 1 : work well, but :
  - Seharusnya bisa langsung di append ke variable, tanpa init new Object() ke variable baru terlebih dahulu
  - Terbatas hanya pada romawi dari angka 1 sampai 3999
solution 2 :
  - A bit hard to understand for a newbie JS ranger
  - not easy to maintenance and scaling
  - Ada Checker typeof number, bagus untuk pengondisian awal
solution 3 :
  - Buggie if the number is more than 10
soultion 4 : runing well as expected,
  - easy to understand

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
Ya, terutama pada soultion 3
- Cara verivikasi, lakukan testing dengan test-case yang beraneka ragam.
- Lebih baik lagi jika di lakukan TDD (Test Driven Driver) atau BDD (Behavior Driven Development)

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
Nope.

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
Ya. Kecuali solusi 2

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
Ya. Jika kondisinya lebih cepat dan praktis menggunakan sintaks tersebut

6. Adakah struktur data baru? Apa saja, tolong sebutkan
- stack

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
Tidak sepenuh nya berbeda sebenarnya, cuman code saya belum DRY.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solsi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
Saya pilih solusi 4,
karena lebih mudah dipahami dalam hitungan detik saja.
Jadi saya atau orang lain yang membaca lebih cepat beradaptasi dan berkontribusi di code tersebut.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?

Ada, dampak dapat di ukur dari metric, kecepatan menghasilkan output dan resource CPU dan RAM yang digunakan,
namun karena ini programn yang sangat sederhana, hal tesebut sulit diukur.

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?

Jelas, code yang baik adalah code yang bisa mudah dimengerti oleh programmer lain dan coder itu sendiri
(dengan mudah di pahaminya code, orang lain juga dapat berkontribusi untuk meningkatkan kualitas code tersebut,
 secara otomatis performanya juga akan mengingkat), namun sebaiknya juga ramah terhadap komputer. "Write code for humans, not mechine" :D
*/
