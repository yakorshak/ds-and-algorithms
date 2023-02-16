// Richest Customer Wealth

function maximumWealth(accounts: number[][]): number {
  let richestCustomerWealth = 0;
  let currentCustomerSum = 0;

  accounts.map((item) => {
    for (let i = 0; i < item.length; i++) {
      currentCustomerSum += item[i];
    }

    if (richestCustomerWealth < currentCustomerSum) {
      richestCustomerWealth = currentCustomerSum;
    }

    currentCustomerSum = 0;
  });

  return richestCustomerWealth;
}
