/**
 * @param {number[]} arr
 * @returns {object}
 */
export function analyzeArray(arr) {
    let average = 0;

    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }

    average = Number((average / arr.length).toFixed(3));

    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        average,
        min,
        max,
        length: arr.length,
    };
}
