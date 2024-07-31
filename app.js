// Conversion rates
const oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87 // British Pound
};

const dollarToEuroRate = 1 / oneEuroIs["USD"];
const yenToEuroRate = 1 / oneEuroIs["JPY"];

// Functions
function fromEuroToDollar(euro) {
    return euro * oneEuroIs["USD"];
}

function fromDollarToYen(dollar) {
    // Convert dollar to euro first
    const euros = dollar * dollarToEuroRate;
    // Convert euros to yen
    return euros * oneEuroIs["JPY"];
}

function fromYenToPound(yen) {
    // Convert yen to euro first
    const euros = yen * yenToEuroRate;
    // Convert euros to pounds
    return euros * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };