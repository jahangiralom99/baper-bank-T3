document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const field = depositField.value;

  depositField.value = "";

  if (isNaN(parseInt(field))) {
    alert("please Valid Number");
    return;
  }

  const previousDeposit = document.getElementById("previous-deposit");

  const previousBalance = document.getElementById("previous-balance");
  const balance = previousBalance.innerText;

  const deposit = previousDeposit.innerText;
  const total = parseFloat(field) + parseFloat(deposit);

  previousDeposit.innerText = total;

  const totalBalance = parseFloat(field) + parseFloat(balance);

  previousBalance.innerText = totalBalance;
});
