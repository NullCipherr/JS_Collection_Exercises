/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { // Se x for menor que 0
        return false; // Retorna falso
    }
    let reversed = 0; // Reversed recebe 0
    let original = x; // Original recebe x
    while (x > 0) { // Enquanto x for maior que 0
        reversed = (reversed * 10) + (x % 10); // Reversed recebe a multiplicação de reversed por 10 + o resto da divisão de x por 10
        x = Math.floor(x / 10); // x recebe a divisão de x por 10
    }
    return reversed === original; // Retorna se reversed é igual a original  
};