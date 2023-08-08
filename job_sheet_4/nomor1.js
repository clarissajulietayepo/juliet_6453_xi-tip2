//  Soal : Hitung panjang karakter dari kalimat berikut ini: "Budi adalah seorang siswa jurusan RPL yang
// tinggal didaerah Bekasi" 

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (inputString) => {
    // Contoh property length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});