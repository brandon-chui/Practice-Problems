// Have the function LongestIncreasingSequence(arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is [4, 3, 5, 1, 6] then a possible LIS is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the longest increasing subsequence.
// Examples
// Input: [9, 9, 4, 2]
// Output: 1
// Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
// Output: 7

function LongestIncreasingSequence(arr) {
    if (arr.length == 0 || arr == undefined) return 0;

    let subArr = new Array(arr.length).fill(1);
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                subArr[i] = Math.max(subArr[j] + 1, subArr[i])
            }
        }
    }
    return Math.max(...subArr);
}

console.log(LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]))

