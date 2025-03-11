import { calculateTax } from '../taxCalculator.js';

describe("tax_calculator_tests", () => {
    it("income_under_11000", () => {
        var actual = calculateTax(6000);
        expect(actual).toBe(600);
    });
    it("income_is_11000", () => {
        var actual = calculateTax(11000);
        expect(actual).toBe(1100);
    });
    it("income_is_12000", () => {
        var actual = calculateTax(12000);
        expect(actual).toBe(1219.88);
    });
    it("income_under_44725", () => {
        var actual = calculateTax(44725);
        expect(actual).toBe(5146.88);
    });
    it("income_under_50000", () => {
        var actual = calculateTax(50000);
        expect(actual).toBe(6307.16);
    });
    it("income_under_100000", () => {
        var actual = calculateTax(100000);
        expect(actual).toBe(17399.42);
    });
    it("income_under_900000", () => {
        var actual = calculateTax(900000);
        expect(actual).toBe(293330.38);
    });
})
