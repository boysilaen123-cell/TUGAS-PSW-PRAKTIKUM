NAMA        : BOY FERMANA SILAEN
NIM         : 41426041
PRODI       : DIV TEKNOLOGI REKAYASA PERANGKAT LUNAK

1. FILE DAN CONSOLE
    Pada bagian praktikum ini kita dapat mengetahui apa kegunaan dari ["<script src="main.js" defer></script>] jadi script berfungsi untuk menunjukkan file JavaScript yang dimuat. lalu fungsi dari kata defer pada baris kode ini adalah sebagai membuat browser mengunduh script sambil memproses HTML, lalu menjalankannya setelah seluruh HTML selesai dibaca. Jadi script aman mengakses elemen halaman. 
    Jadi, tindakan yang saya buat adalah membuat ["console.log("Halo, JavaScript berjalan!")"] Hasil nyata yang muncul yaitu muncul Halo, JavaScript berjalan! pada consle yang ada pada DevTools.

2. KONVERSI DATA
    Pada bagian praktikum ini kita disuruh untuk membuat perhitungan sederhana dengan konsep konsep yang ada pada main.js seperti yang ada pada modul kita memasukkan ["const teks = "2";"] yang dimana inii akan menyimoan variabel teks dengan isi string 2 selanjutnya ["console.log(teks + 1);"] berfungsi untuk membuat teks ditambah dengan 1 yang membuat hasilnnya menjadi 21. Berbeda dengan ["console.log(Number(teks) + 1);"] ini mengubah string 2 menjadi nilai integer yang ditandai oleh ["Number(teks)"] itulah yang membuat string 2 menjadi integer atau bilangan bulat.
    
    Lalu pada praktikumm kita disuruh untuk menguji Uji Number("abc") yang dimana jika nilaii integer kita ubah menjadi string abc maka pada bagian Number(teks). akan menjadi atau akan mengeluarkkan Nan Karena abc bukan merupakan bilangan bulat/integer jadi yang akan muncul adalah NaN. Lalu jika kita membuat uji Number.isFinite berfungsi untuk memeriksa apakah bilangan merupakan angka ataupun huruf.

3. ATURAN JUMLAH TIKET
    Pada bagian praktikum ini di jelaskan kepada kita bahwa kita disuruh unruk membuat sebuah program pada main.js yang berfungsi untuk membuat aturan if ["const jumlah = Number("3");"] berfungsi untuk menyimpan nilai fariabel. ["if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5)"] saya akan menjelaskan kegunaan dari baris kode ini yang dimana ada ["!Number.isInteger(jumlah)"] jadi baris kode yang ini berfungsi untuk memeriksa terlebih dahulu apakah bilangan yang kita masukkan itu bernilai iteger atau bukan integer. nah, jadi semisal dia adalah bilangan integer maka akan bernilai true tetapi ini akan di negasikan karena ada tanda "!" yang dimana trus akan di ubah menjadi false dan begitu juga la sebaliknya.
    
    Lalu kita menguji 0 ,1 ,5 ,1.5 ,3 ,dan abc yang dimana jika kita memasukkan nilai 3, 1, dan 5 akan keluar output else yang dimana mengalikannya dengan 10000. tetapi jika kita memasukkan 0, 1.5, dan abc maka yang akan keluar adalah Jumlah Tidak Valid! karena dari salah satu ketentuan yang ada sudah bernilai true yang mengakiabt kan yang di print adalah yang ada pada baris di bawah if. Sebagai contyoh semisal kita membuat number menjadi "abc" nah ini akan diperiksa dulu oleh !Number.isInteger(jumlah) yang dimana ini akan memeirksa apakah dia bilangan bulat apa tidak. Karena abc bukan bilangan bulat maka dia bernilai false namun karena ada tanda "!" ini membalikkan hasil false menjadi true. yang membuat hasil yang di print adalah tidak valid!.

4. LOOP KOLEKSI
    Pada bagian ini dijelaskan bahwa kita akan membuat juf=dul dengan array atau penyimpanann ["const judul = ["HTML", "CSS", "Audit"];"] pada baris kode ini dijelaskan kepada kita bahwa judul akan dijadikan variabel tetap yang berisikan  array di dalmnya. Sedangkan, baris kode ["for (const item of judul) console.log(item);"] ini berfungsin untuk membuat loopingng yanng dimana loop yang akann di buat akan menghabiskan semua isi araay jadi ini akan memulai dari array pertama yaitu HTML lalu seterusnya sampai variabke judul array nya habis terpakai. 
   
    Lalu disini kita disutruh unutk berlatih yang dimana kita disuruh untuk membuat uji array kosong, jadi caraya kita tinggal menghapus salah satu bagian tapi jangan menghapus kutipnya karena itu akan menjadi array kosong kita. nah jadi semisal kita memeriksanya di DevTools pada bagian konsole output akan muncul dengan isi kosong. Lalu kita disuruh lagi unutk membuat atau menambahkan array ke 4 yang dimana disini saya menambahkan array "JavaScript" cara menambahkannya yaitu tinggal membuat kutip dua sebagai penanda bahwa dia itu string dan isi dengan JavaScript. Maka akan keluar array ke 4 dengan pengulangan sebelumnya.


