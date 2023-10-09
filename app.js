function calculateSum() {
    let inputNumber = document.getElementById("numberInput").value;
    let result = sumOfDigits(inputNumber);
    // alert(`The sum of the digits is: ${result}`);
    document.getElementById('won').innerHTML=result + 350 +' RS';
}

function sumOfDigits(number) {
    let digits = number.toString().split('').map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
    return sum;
}


