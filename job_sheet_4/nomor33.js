// Soal : Ubah kalimat "Node.js itu asik sekali loh" menjadi huruf besar (uppercase).

const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    // Gunakan method toUpperCase untuk mengubah kalimat menjadi huruf besar
    const kalimatUpperCase = kalimat.toUpperCase();
    console.log(`Kalimat dalam huruf besar: ${kalimatUpperCase}`);
    rl.close();
});