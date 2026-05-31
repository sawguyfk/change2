const exchangeRate = 0.028; 

function convertToYen() {
  const amount = document.getElementById("amount").value; 
  if (amount && amount > 0) {
    const amounteuro = (amount * exchangeRate).toFixed(2); 
    document.getElementById("result").innerText = `${amounteuro}€`;
  } else {
    document.getElementById("result").innerText = "กรุณากรอกจำนวนเงิน";
  }
}

const Output = document.getElementById('result');
