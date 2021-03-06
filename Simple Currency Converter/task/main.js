console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`)

console.log(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`)

const input = require('sync-input');

let currencies = ["JPY", "EUR", "GBP", "RUB", "USD"];
let currencyInput = input("To:").toUpperCase();
if (!(currencies.includes(currencyInput))) {
    console.log("Unknown currency");
    return;
}

let amountInput = Number(input("Amount:"));
let result;

if (isNaN(amountInput)) {
    console.log("The amount has to be a number");
    return;
} else if (amountInput < 1 ) {
    console.log("The amount can not be less than 1");
    return;
} else if (currencyInput === "JPY") {
    result = (amountInput * 113.5).toFixed(4);
} else if (currencyInput === "EUR") {
    result = (amountInput * 0.89).toFixed(4);
} else if (currencyInput === "RUB") {
    result = (amountInput * 74.36).toFixed(4);
} else if (currencyInput === "GBP") {
    result = (amountInput * 0.75).toFixed(4);
} else if (currencyInput === "USD") {
    result = (amountInput).toFixed(4);
}

console.log(`Result: ${amountInput} USD equals ${result} ${currencyInput}`);
