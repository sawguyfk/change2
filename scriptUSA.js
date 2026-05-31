    const exchangeRate = 0.03; // 1 บาท = 0.03 USD (ตัวอย่าง)

    function convertToDollar() {
      const amount = document.getElementById("amount").value; // รับค่าจาก input
      if (amount && amount > 0) {
        const amountDollar = (amount * exchangeRate).toFixed(2); // แปลงค่าและปัดทศนิยม 2 ตำแหน่ง
        document.getElementById("result").innerText = `${amountDollar}$`;
      } else {
        document.getElementById("result").innerText = "กรุณากรอกจำนวนเงิน";
      }
    }

    const Output = document.getElementById('result');
