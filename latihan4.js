const prompt = require('prompt-sync')();

const luasLingkaran = function() { };

const panjang = parseFloat(prompt('Masukkan panjang: '));
const lebar = parseFloat(prompt('Masukkan lebar: '));

console.log(`Luas persegi panjang adalah: ${luasPersegiPanjang(panjang, lebar)}`);

