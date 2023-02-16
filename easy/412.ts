// 412. Fizz Buzz

function fizzBuzz(n: number): string[] {
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    let result =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : String(i);

    answer.push(result);
  }

  return answer;
}
