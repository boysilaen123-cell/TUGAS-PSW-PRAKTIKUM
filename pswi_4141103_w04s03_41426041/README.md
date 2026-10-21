Nama    : Boy Fermana Silaen
NIK     : 41426041
KELAS   : DIV TEKNOLOGI REKAYASA PERANGKAT LUNAK

RESET UKURAN KOTAK
Pad bagian ini saya mendapatkan pengertian bahawa "width" berfungsi untuk membuat ukuran pasti dari suatu program sedangkan max-width berfungsi sebagai program yang mengatur lebar max Elemen bisa mengecil secara fleksibel dengan menyesuaikan layar yang lebih kecil, tetapi tidak akan pernah melewati batas ukuran yang ditentukan pada program.

TOKEN WARNA DAN JARAK
Hal yang saya menerti dari uji coba nomor 4 sesuai dengan modul ini adalah saya menjadi lebih paham bagaimana cara melakukan pemanngilan program antar proggram. lalu saya mengerti bahwa root adalah keseluruhan program. jadi apa yang diisi di dalam root bisa saja mengubah keseluruhan isi program.  pemabggilan "--brand" harus kita buat pada setiap dimana saja kita buat programnya.

TIPOGRAFI DAN UNIT
Disini saya jadi mengetahui bagaiimana cara menggunakan ataupun mengatur ukuran melalui rem. yang dimana pada program bagian ini juga berfungsi untuk membuat teks tida  terpotong saat kita  membesarkan halaman sampai zoom 200. 

ORGANISASI DAN AUDIT
Pada bagian ini saya berhasil membuat semua tombol yang ada pada web berhasil berjalan semmua tiidak ada yang tidak dapat berjalan saat saya menekan tombol "tab". saya juga Merapikan style.css dengan "ctrl + shift + F",Menghapus aturan percobaan (.notice, .card p purple, dll). Menguji keyboar.

Input/kondisi	                                    Tindakan	                 Hasil aktual	                    Status/bukti
Kasus normal: data valid, --brand diganti ke warna	Isi form dengan keyboard,    Fokus terlihat di semua kontrol;        dibukti judul,                                              tekan Daftar, ganti --brand, tombol, dan garis fokus ikut berubah
                                                     muat ulang	                               
Kasus batas: zoom 200%, teks panjang, tiket 1 dan 5	 Zoom 200%, ketik Nama        Tidak ada teks terpotong atau scroll 
                                                    panjang dan Catatan 300      horizontal; Catatan berhenti di 300;    dibukti
                                                    karakter, coba tiket 1 dan 5  tiket 1  dan 5 diterima	
Kasus gagal: kode 12ab, tiket 6, email tanpa @, 
Nama kosong	                                        Isi data yang salah,          Browser menolak kirim dan menandai      dibukti
                                                     tekan Daftar                 kolom yang salah

