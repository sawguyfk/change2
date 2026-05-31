const exchangeRate = 0.22; 

function convertToYen() {
  const amount = document.getElementById("amount").value; 
  if (amount && amount > 0) {
    const amountyuan = (amount * exchangeRate).toFixed(2); 
    document.getElementById("result").innerText = `${amountyuan}¥`;
  } else {
    document.getElementById("result").innerText = "กรุณากรอกจำนวนเงิน";
  }
}

const Output = document.getElementById('result');
