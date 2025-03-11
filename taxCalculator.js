let tax_brackets = [
    { lower: null, higher: 11000, percentage: 0.1, accumulatedTax: 0 },
    { lower: 11001, higher: 44725, percentage: 0.12, accumulatedTax: 1100 },
    { lower: 44726, higher: 95375, percentage: 0.22, accumulatedTax: 5146.88 },
    { lower: 95376, higher: 182100, percentage: 0.24, accumulatedTax: 16289.66 },
    { lower: 182101, higher: 231250, percentage: 0.32, accumulatedTax: 37103.42 },
    { lower: 231251, higher: 578125, percentage: 0.35, accumulatedTax: 52831.10 },
    { lower: 578126, higher: null, percentage: 0.37, accumulatedTax: 174237.00 }
]

export function calculateTax(taxable_income) {

    for (var i = 0; i < tax_brackets.length; i++) {
        var tax_bracket = tax_brackets[i];
        if (tax_bracket.lower == null && taxable_income <= tax_bracket.higher) {
            return Number((taxable_income * tax_bracket.percentage).toFixed(2));
        }

        if ((taxable_income >= tax_bracket.lower && taxable_income <= tax_bracket.higher) || tax_bracket.higher == null) {
            return Number((tax_bracket.accumulatedTax + ((taxable_income - tax_bracket.lower) * tax_bracket.percentage)).toFixed(2));
        }
    }
}
