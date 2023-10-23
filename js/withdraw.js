document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const field = withdrawField.value;

    withdrawField.value = "";
    
    if (isNaN(parseInt(field))) {
        alert("please Valid Number");
        return;
    }
    
  const previousWithdraw = document.getElementById("previous-withdraw");
  const withdraw = previousWithdraw.innerText;



  const previousBalance = document.getElementById("previous-balance");
    const balance = previousBalance.innerText;
    
    
    if (parseFloat(balance) < parseFloat(field)) {
        alert("ato tk nai")
        return;
    }

    const newWithdraw = parseFloat(field) + parseFloat(withdraw);
    previousWithdraw.innerText = newWithdraw;

  const totalBalance = parseFloat(balance) - parseFloat(field);

  previousBalance.innerText = totalBalance;

  
});
