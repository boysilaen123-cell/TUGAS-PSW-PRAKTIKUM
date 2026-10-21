NAMA    : BOY FERMANA SILAEN
NIM     : 41426041
PRODI   : DIV TEKNOLOGI REKAYASA PERANGKAT LUNAK

1.  STARTER MOBILE
    Dengan viewport 320px dan satu kolom, semua kartu katalog tersusun ke bawah dan tidak ada yang tersembunyi. Meta viewport (width=device-width, initial-scale=1) membuat browser memakai lebar layar sebenarnya.

2. BREAKPOINT KONTEN
    Pada 767px query min-width: 48rem belum aktif, jadi katalog tetap satu kolom. Pada 768px dan 769px query aktif dan katalog berubah menjadi dua kolom. Satuan rem mengikuti ukuran font root, jadi 48rem sama dengan 768px hanya jika root-nya 16px. Kalau pengguna mengubah ukuran font browser, titik pindahnya ikut bergeser

3.  NAVIGASI DAN FORM
    Dengan flex-wrap: wrap, menu yang tidak muat di satu baris turun ke baris berikutnya, tidak meluber keluar layar. max-width: 100% mencegah input, select, dan textarea lebih lebar dari wadahnya. Label panjang akan membungkus ke baris baru. Tombol Tab tetap berpindah fokus secara berurutan, dan indikator fokus harus tetap terlihat di layar kecil.

4. MATRIKS VIEWPORT
    •	320px: satu kolom, konten lengkap.
    •	768px: dua kolom.
    •	1200px: tetap dua kolom, ruang tambahan jadi lebih lega.
    •	Zoom 200%: viewport efektif menyusut menjadi sekitar 160 sampai 640 CSS px, jadi layout kembali ke satu kolom dan teks tidakb
        boleh terpotong.
    •	Overflow sengaja: elemen dengan width: 900px melebihi layar kecil dan memunculkan scroll horizontal. Perbaikannya max-width: 
        100% atau min-width: 0 pada .card. Dalam grid dan flex, item punya min-width: auto secara default sehingga tidak mau menyusut di bawah lebar kontennya. min-width: 0 mengizinkan item mengecil.

5. Format Laporan Yang Diisi  Mahasiswa
INPUT\KONDISI           TINDAKAN                HASIL AKTUAL                        STATUS/BUKTI
KONDISI NORMAL          MENJALANKAN PROGRAM     WEB BERJALAN DENGAN BAIK            DI FOLDER BUKTI
                                                TIDAK ADA EROR
KONDISI BATAS           MEMBUAT BATAS" PADA     WEB JADI TIDAK BERANTAKAN
                        WEB                     DAN SEMUANYA TERSUSUN DENGAN        DI FOLDDER BUKTI
                                                RAPI
KONDISI GAGAL           MEMBUAT OVERVLOW        CARD MELEWATI BATAS YANG SUDAH      DI FOLDER BUKTI
                        SENGAJA YAITU           DI BUAT.    
                        WIDTG 900PX


