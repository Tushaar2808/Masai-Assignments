function createBankAccount(val) {
    let amount = val;
    return {
      deposit: function (val) {
        amount += val;
        return amount;
      },
      withdraw: function (val) {
        amount -= val;
        return amount;
      },
      getBalance: function () {
        return amount;
      },
    };
  }
  
  let  account = createBankAccount(10);
  console.log(account.deposit(100));
  console.log(account.withdraw(70));
  console.log(account.getBalance());
