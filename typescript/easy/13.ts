// 13. Roman to Integer

function romanToInt(s: string): number {
  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const arr = s.split("");
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "I" && arr[i + 1] == "V") {
      result += 4;
      i++;
      continue;
    }
    if (arr[i] == "I" && arr[i + 1] == "X") {
      result += 9;
      i++;
      continue;
    }
    if (arr[i] == "X" && arr[i + 1] == "L") {
      result += 40;
      i++;
      continue;
    }
    if (arr[i] == "X" && arr[i + 1] == "C") {
      result += 90;
      i++;
      continue;
    }
    if (arr[i] == "C" && arr[i + 1] == "D") {
      result += 400;
      i++;
      continue;
    }
    if (arr[i] == "C" && arr[i + 1] == "M") {
      result += 900;
      i++;
      continue;
    }

    // result += map.get(arr[i]);
  }

  return result;
}
