import { calculator } from "./calculator";

test("Add two numbers", () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(5, 8)).toBe(13);
});

test("Subtract two numbers", () => {
    expect(calculator.subtract(10, 3)).toBe(7);
    expect(calculator.subtract(23, 11)).toBe(12);
});

test("Multiply two numbers", () => {
    expect(calculator.multiply(4, 5)).toBe(20);
    expect(calculator.multiply(6, 8)).toBe(48);
});

test("Divide two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(24, 4)).toBe(6);
});
