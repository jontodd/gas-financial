const tax = require('./tax')

test('taxBracketsWithOutOrdinaryIncome', () => {
  expect(tax.federalCapitalGainsMarriedFilingJointly(0,75900)).toBe(0);
  expect(tax.federalCapitalGainsMarriedFilingJointly(0,75900+100)).toBe(15);
  expect(tax.federalCapitalGainsMarriedFilingJointly(0,470700)).toBe(59220);
  expect(tax.federalCapitalGainsMarriedFilingJointly(0,470700+100)).toBe(59220+20);

  expect(tax.federalCapitalGainsMarriedFilingJointly(75900,0)).toBe(0);
});

test('taxBracketsWithOrdinaryIncome', () => {
  expect(tax.federalCapitalGainsMarriedFilingJointly(75900,0)).toBe(0);
  expect(tax.federalCapitalGainsMarriedFilingJointly(75900,100)).toBe(15);
  expect(tax.federalCapitalGainsMarriedFilingJointly(470700,100)).toBe(20);
  expect(tax.federalCapitalGainsMarriedFilingJointly(470700,0)).toBe(0);

  expect(tax.federalCapitalGainsMarriedFilingJointly(300000,300000)).toBe(51465);
})
