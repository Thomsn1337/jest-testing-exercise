import { analyzeArray } from "./analyzeArray";

test("Analyze an array of numbers of even length", () => {
    const arr = [1, 8, 3, 4, 2, 6];

    expect(analyzeArray(arr)).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test("Analyze an array of numbers of odd length", () => {
    const arr = [1, 8, 3, 4, 2, 6, 7];

    expect(analyzeArray(arr)).toStrictEqual({
        average: 4.428,
        min: 1,
        max: 8,
        length: 7,
    });
});
