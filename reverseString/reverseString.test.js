import { reverseString } from "./reverseString";

test("Reverse entered string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
});
