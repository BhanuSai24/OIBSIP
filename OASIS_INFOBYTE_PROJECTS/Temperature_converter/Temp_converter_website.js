function convertTemp() {
    const Number =(document.getElementById('Number').value);
    const unit = document.getElementById('unit').value;
    let result;
    if (unit === 'fahrenheit') {
      result = (Number * 9/5) + 32;
    } else {
      result = (Number - 32) * 5/9;
    }
    document.getElementById('result').innerText = `Converted temperature is : ${result.toFixed(2)} ${unit.toLowerCase()}`;
  }
