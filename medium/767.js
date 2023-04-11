/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  let input = {};
  let q = new MaxPriorityQueue({ priority: (e) => e.frequency });

  for (let i = 0; i < s.length; i++) {
    let current = input[s[i]];
    current ? (input[s[i]] = current + 1) : (input[s[i]] = 1);
  }

  for (let i in input) {
    q.enqueue({ char: i, frequency: input[i] });
  }

  let previousChar = null;
  let previousFrequency = 0;
  let output = [];

  while (q.size() > 0) {
    let char = q.front().element.char;
    let frequency = q.front().element.frequency;
    q.dequeue();

    if (previousChar !== null && previousFrequency > 0) {
      q.enqueue({ char: previousChar, frequency: previousFrequency });
    }

    output.push(char);
    previousChar = char;
    previousFrequency = frequency - 1;
  }

  if (output.length === s.length) {
    return output.join("");
  }
  return "";
};
