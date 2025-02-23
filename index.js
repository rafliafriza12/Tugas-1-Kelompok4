import promptSync from "prompt-sync";
import {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  modulus,
  absolut,
  maksimum,
  minimum,
  bulatkan,
} from "./solution.js";

const prompt = promptSync();

function main() {
  const operation = prompt(
    "Pilih operasi (tambah, kurang, kali, bagi, pangkat, faktorial, isPrima, modulus, absolut, maksimum, minimum, bulatkan): "
  );

  let result;
  switch (operation) {
    case "tambah":
    case "kurang":
    case "kali":
    case "bagi":
    case "pangkat":
    case "modulus":
    case "maksimum":
    case "minimum":
      const a = parseFloat(prompt("Masukkan angka pertama: "));
      const b = parseFloat(prompt("Masukkan angka kedua: "));
      switch (operation) {
        case "tambah":
          result = tambah(a, b);
          break;
        case "kurang":
          result = kurang(a, b);
          break;
        case "kali":
          result = kali(a, b);
          break;
        case "bagi":
          result = bagi(a, b);
          break;
        case "pangkat":
          result = pangkat(a, b);
          break;
        case "modulus":
          result = modulus(a, b);
          break;
        case "maksimum":
          result = maksimum(a, b);
          break;
        case "minimum":
          result = minimum(a, b);
          break;
      }
      break;

    case "faktorial":
    case "isPrima":
    case "absolut":
    case "bulatkan":
      const n = parseFloat(prompt("Masukkan angka: "));
      switch (operation) {
        case "faktorial":
          result = faktorial(n);
          break;
        case "isPrima":
          result = isPrima(n);
          break;
        case "absolut":
          result = absolut(n);
          break;
        case "bulatkan":
          result = bulatkan(n);
          break;
      }
      break;

    default:
      console.log("Operasi tidak dikenal");
      return;
  }

  console.log(`Hasil dari operasi ${operation} adalah: ${result}`);
}

main();
