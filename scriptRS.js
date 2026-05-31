const exchangeRate = 2.85; 

function convertToYen() {
  const amount = document.getElementById("amount").value; 
  if (amount && amount > 0) {
    const amountruble = (amount * exchangeRate).toFixed(2); 
    document.getElementById("result").innerText = `${amountruble}₽`;
  } else {
    document.getElementById("result").innerText = "กรุณากรอกจำนวนเงิน";
  }
}

const Output = document.getElementById('result');
