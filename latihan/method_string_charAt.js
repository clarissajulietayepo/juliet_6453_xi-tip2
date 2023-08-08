const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// charAt
rl.question("Masukan sebuah kalimat: ", (inputString) => {
    rl.question("Masukan indeks yang ingin anda cek: ", (index) => {
            // Konversi nilai index ke tipe Number
            index = Number(index);
            // Periksa apakah index valid (berada dalam rentang string)
            if (index >= 0 && index < inputString.length) {
            // Gunakan method charAt untuk mendapatkan kerekter pada index yang akan di minta 
                const character = inputString.charAt(index);
                console.log(`Karakter pada indeks ${index}: ${character}`);
            } else {
                console.log("Indeks tidak valid!");
            }
            rl.close();
    });
});