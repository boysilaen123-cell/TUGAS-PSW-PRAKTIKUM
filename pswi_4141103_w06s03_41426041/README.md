NAMA    : BOY FERMANA SILAEN
NIM     : 41426041
PRODI   : DIV TEKNOLOGI REKAYASA PERANGKAT LUNAK

1. GAMBAR FLEKSIBEL
    supaya gambar tidak meluap dari kotaknya di layar kecil. Aturan img { max-width: 100%; height: auto; } membuat gambar mengecil mengikuti wadahnya dan rasionya tetap. jadi, kegunaan dari kode ini dapat kita perhatikan saat kita menggunakan DevTools yang dimana saat kita menggunakan DevTools Kita bisa memperbesar dan memperkecil program untuk memmastikan apakah di divice lain web tidak terlalu berantakan atau meluap.

2. KANDIDAT RESOLUSI
    Pada bagian praktikum yang ini kita diminta agar kita membuat dan memasukkan gambar ke dalam card. Selain itu kode pada bagian ini yaitu [ srcset="foto-320.jpg 320w, foto-640.jpg 640w"] berfungsi agar ada 2 gambar yag memiliki ukuran yang berbeda. Semisal supaya HP tidak mengunduh gambar besar yang tidak perlu. srcset dan sizes memberi browser pilihan file dan informasi lebar tampilan, lalu browser memilih sendiri yang paling pas. Kode [ sizes="(min-width: 48rem) 50vw, 92vw"] berfungsi agar semisal ukuran minimal 48 sudah terpenuhi maka gambar akan berukura 50% web dan 90% lebar web.

3. FLUID FONT DAN CONTAINER QUERY
    Penjelasan Praktikum ke 3 ini menjelaskan tentang bagaimana cara agar kita bisa membuat animasi semakin halus dan memperkenalkan tag baru yaitu container. pertama kode [{ font-size: clamp(1.75rem, 1.2rem + 2vw, 3rem); }] ini membuat agar h1 bisa perlahan-lahan mengecil saat layar di kecilkan jadi ini akan membuat judul mengurangi break point nya dan membuat animasinya berkurang secara perlahan. lalu yang [@container] lebih berfokus kepada element sendiri jadi dia dapat membawa 1 element untuk di atur pda css. semisal, pada praktikum ini [container-type: inline-size] menjadikan .card-wrap sebagai “wadah yang diukur” lebarnya. [@container (min-width: 30rem)] berarti kalau lebar wadah minimal 30rem (480px), padding .card menjadi 1.5rem. Kalau lebih sempit, padding tetap 1rem seperti aturan biasa.
    jadi ini lebih keaarah pengabilan per element beda dengan [@media]

4. REDUCED MOTION DAN AUDIT
    Pada bagian praktikum ini kode [media (prefers-reduced-motion: reduce) {.card { transition: none; }}] berfungsi sebagai alat yang membuat agar semisal si pemilik device mengaktifkan [prefers-reduced-motion: reduce] maka devicenya akan otomatis membbuat transisi pada web (semisal dibesarkan ataupun dikecilkan) menjadi lebih minim breakpointnya atau lebih tepat bisa dikatakan supaya ini bisa lebih smooth.

5. Format laporan yang diisi mahasiswa
INPUT\KONDISI           TINDAKAN                    HASIL AKTUAL                        STATUS/BUKTI
KONDISI NORMAL          MENJALANKAN PROGRAM         WEB BERJALAN DENGAN BAIK            DI FOLDER BUKTI
                                                    TIDAK ADA EROR
KONDISI BATAS           Saya membuat Container      WEB JADI TIDAK BERANTAKAN
                        yang dimana berfungsi
                        agar tidak ada yang         Hasil web lebih rapi                Di Folder Bukti
                        melebar melewati class
                        card.                    
KONDISI GAGAL           Membuat ataupun mengisi     Hasil akutual yang terlihat adalah
                        srcset  dengan foto yang    Foto yang tertera pada web ialah    Di Folder Bukti
                        berbeda.                    foto yang memiliki 640w.