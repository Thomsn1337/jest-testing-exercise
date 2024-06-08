/**
 * @param {string} str
 * @param {number} offset
 * @returns {string}
 */
export function caesarCipher(str, offset) {
    if (offset < 0) offset *= -1;

    offset %= 26;

    /**
     * @param {string} char
     * @returns {string};
     */
    function shift(char) {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + offset) % 26) + 65);
            }

            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + offset) % 26) + 97);
            }
        }

        return char;
    }

    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += shift(str[i]);
    }

    return result;
}
