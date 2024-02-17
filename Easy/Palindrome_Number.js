var isPalindrome = function(x) {
    let num = String(x);
    let reverseNumber = [];
    for (let i = 0; i < num.length; i++) {
        reverseNumber[i] = num[i];
    }
    return x === +reverseNumber.reverse().join('');
};