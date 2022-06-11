function bankAccount(ownerName){
    let nameButton = document.getElementById('addName');
    let ownerN = nameButton.addEventListener('click', function() {
      prompt('Please enter your account name');
      return
  });
  console.log(ownerN);


    let depositBtn = document.getElementById('add_deposit');
    let depositAmount = depositBtn.addEventListener('click', function() {
      parseInt(prompt('Please enter the amount that you want to deposit'));
      return
  });
  console.log(depositAmount);


    let withdrawaltBtn = document.getElementById('add_withdrawal');
    let withdrawalAmount = withdrawaltBtn.addEventListener('click', function(){
      parseInt(prompt('Please enter the amount that you would like to withdraw'));
      return
  });
  console.log(withdrawalAmount);

  let balance = 0;
  function innerBankAction(action, sum){
    if (action == 'deposit'){
        balance += sum;
    }
    if (action == 'withdrawal'){
      balance -= sum;
  }
    return 'Your balance is $' + balance;
  }
  return innerBankAction

}

  let bankAccount = bankAccount();


  bankAction('deposit', depositAmount);
  bankAction('withdrawal', withdrawalAmount);

  let owner = ownerName;
    function withdrawal(withdrawalAmount){
      balance -= withdrawalAmount;
    }
    function deposit(depositAmount){
      balance +=depositAmount;
    }
    


function bankAccount() {
    
    let balance = 0;
    function changeBy(val) {
      balance += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      getBalance: function() {
        return balance;
      }
    };   
  };
  let myAccount = bankAccount()


console.log(myAccount.getBalance()); // 0
myAccount.increment(); 
console.log(myAccount.getBalance()); // 1
myAccount.decrement();
console.log(myAccount.getBalance()); // 0

