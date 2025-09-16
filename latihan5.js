const prompt = require('prompt-sync')();

function calculator(a, b, operator) {
    select id (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Tidak bisa dibagi nol';
        default:
            return 'Operator tidak valid';
    }
}

const angka1 = parseFloat(prompt('Masukkan angka pertama: '));
const operator = prompt('Pilih operator (+, -, *, /): ');
const angka2 = parseFloat(prompt('Masukkan angka kedua: '));

const hasil = calculator(angka1, angka2, operator);
console.log(`Hasil: ${hasil}`);
 