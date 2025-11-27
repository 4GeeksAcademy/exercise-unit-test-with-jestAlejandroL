const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("1 euro debe ser '1.07 dolares'", () => {
expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
})
test("1 dolar debe ser '146.26 yen'", () =>{
    expect(fromDollarToYen(1)).toBeCloseTo(146.26);
});
test("1 yen debe ser '0.00556 pounds'", () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.00556);
});