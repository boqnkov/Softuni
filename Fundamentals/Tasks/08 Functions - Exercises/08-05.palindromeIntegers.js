function palindrome(arr) {

    for (let num of arr) {
        let isPalindrome = checkIsPalindrome(num)
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
       
        let numAsString = String(num);
        let reversedNumString = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let curChar = numAsString[i];
            reversedNumString += curChar
        }

        let isPalindrome = reversedNumString == numAsString;
        return isPalindrome;
    }

}
palindrome([123, 323, 421, 121])