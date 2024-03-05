// 1009. Complement of Base 10 Integer

function bitwiseComplement(n: number): number {
  let binary: number[] = [];
  let result = 0;

  if (n === 0) {
    return 1;
  }

  while (n > 0) {
    n % 2 === 0 ? binary.push(0) : binary.push(1);
    n = Math.floor(n / 2);
    if (n === 1) {
      binary.push(1);
      break;
    }
  }

  for (let i = 0; i < binary.length; i++) {
    binary[i] === 1 ? (binary[i] = 0) : (binary[i] = 1);
  }

  for (let k = binary.length - 1; k >= 0; k--) {
    result += binary[k] * 2 ** k;
  }

  return result;
}
