Catatan peran id, name, dan type pada README.
- Atribut id berfungsi sebagai pengenal unik untuk satu elemen di seluruh halaman, sehingga tidak boleh sama dengan elemen lain dan tidak boleh mengandung spasi. Atribut ini biasanya dipakai untuk menghubungkan.
- Name berfungsi sebagai alat untuk membuat kode url berubah saat data yang diisi di submit.
- type berfungsi untuk mennetukan bentukan dari kode yang di gunakan.

Pasangan nama dan nilai :
nama=Boy+Fermana+Silaen&
email=mahasiswa%40example.com
&prodi=trpl&mode=luring&
catatan=Balajar+PSW

Validator yang saya perbaiki
1. eror pertama yang saya dapat yaitu berada pada atribut action. yang dimana, atribut action tidak boleh dikosong jadi solusi yang saaya buat adalah menghapus atribut action.
2. yang kedua saya mendapatkan info bukan eror, dimana hal ini bukan karena kesalahan dari penulisan ataupun program. melainkan salah peletakkan.
3. Saya membuat "</Select>" berlebih jadi untuk membereskan eror saya menghapus yanng berlebih.
4. Dalam kode saya mebuat label dan input yang berlebih dimana membuat eror bertambah jadi saya hanya perlu untuk menghapus nya.
5. Dalam membuat/memasukkan kode program input dan label ternnyata tidak boleh membuat spasi. jadi, solusinya yaitu memberikan tanda "-" pada spasi.
6. Dalam memasukkan/membuat kode program pada input dan label, ternyata tidak boleh menggunakan id yang sama. jadi perbiakkannya hanya perlu mengubah idnya.