/* ===FUNCTION MURNI SEDERHANA=== */
function hitungTotal(n, harga) {
 if (!Number.isInteger(n) || n < 1) return null;
 return n * harga;
}
console.log(hitungTotal(2, 10000));

/* ===KOLEKSI KEGIATAN=== */
const kegiatan = [
 { id: 1, judul: "HTML", kuota: 20 },
 { id: 2, judul: "CSS", kuota: 0 },
 { id: 3, judul: "JavaScript", kuota: 15 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);
const judulTersedia = tersedia.map(k => k.judul);
console.log(judulTersedia);

/* ===DESTRUCTURING DAN SCOPE=== */
const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);

/* ===MODULE DAN UJI=== */
import { HitungTotal } from "./utils.js";
console.log(HitungTotal(2, 10000));