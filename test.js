// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('Converts Euro to Dollar', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
    expect(fromEuroToDollar(5)).toBeCloseTo(5.35);
    expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
});

test('Converts Dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2); // 1 Dollar -> 0.9346 Euros -> 146.26 Yen
    expect(fromDollarToYen(10)).toBeCloseTo(1462.62, 2); // 10 Dollars -> 9.346 Euros -> 1462.62 Yen
    expect(fromDollarToYen(20)).toBeCloseTo(2925.24, 2); // 20 Dollars -> 18.692 Euros -> 2925.24 Yen
});

test('Converts Yen to Pound', () => {
    expect(fromYenToPound(100)).toBeCloseTo(0.5556, 2); // 100 Yen -> 0.639 Euros -> 0.5556 Pounds
    expect(fromYenToPound(1000)).toBeCloseTo(5.556, 2); // 1000 Yen -> 6.39 Euros -> 5.556 Pounds
    expect(fromYenToPound(5000)).toBeCloseTo(27.78, 2); // 5000 Yen -> 31.95 Euros -> 27.78 Pounds
});