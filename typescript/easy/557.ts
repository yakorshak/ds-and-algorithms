function reverseWords(s: string): string {
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let splitedWord = words[i].split("");
    let l = 0;
    let h = splitedWord.length - 1;

    while (l < h) {
      let temp = splitedWord[l];
      splitedWord[l] = splitedWord[h];
      splitedWord[h] = temp;
      l++;
      h--;
    }

    words[i] = splitedWord.join("");
  }

  return words.join(" ");
}
