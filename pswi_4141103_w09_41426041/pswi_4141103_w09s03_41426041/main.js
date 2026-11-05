/* ===FILE DAN CONSOLE=== */
console.log("Halo, JavaScript berjalan!")

/* ===KONVERSI DATA=== */
const teks = "2";
console.log(teks + 1);
console.log(Number(teks) + 1);

/* ===ATURAN JUMLAH TIKET=== */
const jumlah = Number("3");
if (!Number.isInteger(jumlah) || jumlah < 1 || jumlah > 5) {
    console.log("Jumlah tidak valid");
} else { console.log(jumlah * 10000); }

/* ===LOOP KOLEKSI=== */
const judul = ["HTML", "CSS", "Audit", "JavaScript"];
for (const item of judul) console.log(item)