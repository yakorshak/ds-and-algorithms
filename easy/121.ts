function maxProfit(prices: number[]): number {
  let min = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length + 1; i++) {
    min = Math.min(prices[i + 1], min);
    if (prices[i + 1] - min > 0 && prices[i + 1] - min > profit) {
      profit = prices[i + 1] - min;
    }
  }

  return profit;
}
