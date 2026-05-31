const exchangeRate = 4.64; 

function convertToYen() {
  const amount = document.getElementById("amount").value; 
  if (amount && amount > 0) {
    const amountYen = (amount * exchangeRate).toFixed(2); 
    document.getElementById("result").innerText = `${amountYen}¥`;
  } else {
    document.getElementById("result").innerText = "กรุณากรอกจำนวนเงิน";
  }
}

const Output = document.getElementById('result');
