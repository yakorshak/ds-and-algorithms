// 345. Reverse Vowels of a String

function reverseVowels(s: string): string {
  let splited = s.split("");
  let target = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let low = 0;
  let high = splited.length - 1;

  while (low < high) {
    if (target.includes(splited[low])) {
      if (target.includes(splited[high])) {
        let temp;
        temp = splited[low];
        splited[low] = splited[high];
        splited[high] = temp;
        low++;
        high--;
      } else {
        high--;
        continue;
      }
    } else {
      low++;
      continue;
    }
  }

  return splited.join("");
}
