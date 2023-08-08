// Soal : Pada indeks berapa karakter "r" dalam kalimat "JavaScript is fun"?

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat:  ", (kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ", (kataCari) => {
        // Gunakan method indexOf untuk mencari kataCari dalam kalimat 
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1) {
            console.log(`Kata '${kataCari}' ditemukan pada indeks: ${indeksKata}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat. `);
        }
        rl.close();
    });
});