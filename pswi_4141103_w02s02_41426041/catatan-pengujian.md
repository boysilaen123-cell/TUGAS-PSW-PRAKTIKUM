PEMERIKSAAN MELALUI DEVTOOLS

Pemeriksaan             Bukti Yang Dicatat                          Hasil
Bahasa Dokumen          html mempunyai lang=id                      Lulus
Judul Halman            title tampil pada tab browser               Lulus
Hierarki heading        h1, h2, dan h3 berurutan logis              Lulus
Landmark                header, nav, main, aside, footer ditemukan  Lulus
Navigasi                Tautan menuju id yang tersedia              Lulus

VALIDASI HTML
Eror pertama <\aside> tidak dalam di Body
Perbaikan memasukkan <\aside> kedalam body
Error Kedua <\main> tidak dalam body
Perbaikan memasukan <\main>

Experimen Terarah
 Hapus tag penutup article, muat ulang, dan periksa DOM
 Mengetahui pengaruh tag penutup <article> yang dihapus terhadap struktur DOM pada halaman web.

Ubah salah satu id section sehingga tautan navigasi tidak menemukan tujuan
Mengetahui dampak perubahan id pada <section> terhadap fungsi tautan navigasi dalam menemukan tujuan.

Tambahkan h4 langsung setelah h2 tanpa h3, lalu evaluasi hierarkinya.
yang saya dapat dalam melakukan experimen terarah ini ternyata jika kita melompati satu header berarti membuat program eror.

Letakkan main di dalam header, jalankan validator, kemudian perbaiki.
Tujuan eksperimen ini adalah memahami struktur HTML yang benar dengan  meletakkan elemen <main> di dalam <header>, kemudian 
memvalidasi dan memperbaiki kesalahan yang ditemukan.
