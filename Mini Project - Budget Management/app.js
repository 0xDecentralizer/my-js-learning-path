"use strict";

const transactions = [];
let totalIncome = 0;
let totalExpense = 0;
let balance = 0;
let saveBox = 0;

const addTransaction = function (_title, _amount, _type, _date) {
  if (typeof _title !== "string" || _title.trim() === "") {
    console.log("Invalid transaction title!");
    return;
  }
  if (typeof _amount !== "number") {
    console.log("Invalid transaction amountP!");
    return;
  }
  if (_type !== "income" && _type !== "expense" && _type !== "saving") {
    console.log("Invalid transaction type!");
    return;
  }
  if (!/^\d{8}$/.test(_date.toString())) {
    console.log("Invalid date!");
    return;
  }
  if (_type === "expense" && _amount > balance) {
    console.log("Insufficient balance!");
    return;
  }

  transactions.push({
    title: _title,
    amount: _amount,
    type: _type,
    date: _date,
  });

  if (_type === "income") {
    totalIncome += _amount;
    balance += _amount;
  } else if (_type === "expense") {
    totalExpense += _amount;
    balance -= _amount;
  } else if (_type === "saving") {
    saveBox += _amount;
    balance -= _amount;
  }
  console.log(`Transaction submited:
    ${
      transactions.length
    }. ${_title} - ${_amount.toLocaleString()} - ${_type} - on ${formatDate(
    _date
  )} \nBalance after transaction: ${balance.toLocaleString()} \n`);
};

const printAllTxs = function () {
  console.log("\nAll Transacions:");
  for (let i = 0; i < transactions.length; i++) {
    const date = formatDate(transactions[i].date);
    console.log(
      `${i + 1}. ${transactions[i].title} - ${transactions[
        i
      ].amount.toLocaleString()} - ${transactions[i].type} - on ${date}`
    );
  }
};

const checkBalance = function () {
  console.log(
    `\nTotal income: ${totalIncome.toLocaleString()} \nTotal expense: ${totalExpense.toLocaleString()} \nBalance: ${balance.toLocaleString()} \nSave box: ${saveBox.toLocaleString()}`
  );
};

const formatDate = function (number) {
  const str = number.toString();
  const year = str.substring(0, 4);
  const month = str.substring(4, 6) - 1;
  const day = str.substring(6, 8);

  const date = new Date(year, month, day);

  return date.toDateString();
};

// addTransaction('Salary', 100000, 'income', 20250707);
// addTransaction('Buy shoe', 900, 'expense', 20250708);
// addTransaction('Cinema', 100, 'expense', 20250710);
// addTransaction('Gift', 1000, 'income', 20250710);
// addTransaction('Save', 1000, 'saving', 20250712);

// printAllTxs();
// checkBalance();

