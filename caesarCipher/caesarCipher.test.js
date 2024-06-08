import { caesarCipher } from "./caesarCipher";

test("Apply caesar cipher on single word", () => {
    expect(caesarCipher("Hello", 3)).toBe("Khoor");
});

test("Apply caesar cipher on multiple words", () => {
    expect(caesarCipher("HeLLo WorlD", 5)).toBe("MjQQt BtwqI");
});

test("Apply caesar cipher on strings with punctuation", () => {
    expect(caesarCipher("Hello, World!", 8)).toBe("Pmttw, Ewztl!");
});
