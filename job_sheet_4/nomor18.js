// Soal : Ambil tiga karakter pertama dari string "SMK Strada Jakarta".

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal: ", (startIndex) => {
        rl.question("Masukan indeks akhir: ", (endIndex) => {
            // Konversi nilai indeks ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            // Gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substring(startIndex, endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} hingga ${endIndex}:  ${substringResult}`);
            rl.close(); 
        });
    });
});