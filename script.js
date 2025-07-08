const billAmountInput = document.getElementById('bill amount');
const tipPercentageInput = document.getElementById('tip percentage');
const calculateButton = document.querySelector('button');
const totalAmountSpan = document.getElementById('totalAmount');

// console.log(billAmountInput.value);

// get values from input and convert to number
function calculateTip(){
    const billAmountValue = Number(billAmountInput.value);
    const tipPercentageValue = Number(tipPercentageInput.value);

    // calculate the tip amount
    const tipAmount = (billAmountValue * tipPercentageValue) / 100;

    //calculate the total amount
    const totalAmount = billAmountValue + tipAmount;
    
    //display message
    totalAmountSpan.innerText = `$${totalAmount.toFixed(2)}`;

    // Basic validation: Check if inputs are valid numbers and not negative
    if (isNaN(billAmountValue) || isNaN(tipPercentageValue) || billAmountValue < 0 || tipPercentageValue < 0) {
        totalAmountSpan.innerText = 'Please enter valid numbers for both fields.';
        return; // Exit the function if validation fails
    }
}

//cick button to get result
calculateButton.addEventListener('click', calculateTip);