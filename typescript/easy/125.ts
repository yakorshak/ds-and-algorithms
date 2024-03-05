// 125. Valide Palindrome

function isPalindrome(s: string): boolean {
  const arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-zA-Z]/i) || s[i].match(/^\d+$/)) {
      arr.push(s[i].toLowerCase());
    }
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] === arr[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }

  return true;
}
