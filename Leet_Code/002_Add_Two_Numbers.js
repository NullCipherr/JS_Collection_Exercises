/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0; 
    let dummy = new ListNode(0);
    let current = dummy;
    // Enquanto l1 ou l2 for diferente de null
    while (l1 || l2) 
    {
        let sum = carry; // Soma recebe o valor de carry
        if (l1) { // Se l1 for diferente de null
            sum += l1.val; // Soma recebe o valor de l1
            l1 = l1.next; // l1 recebe o próximo valor
        }
        if (l2) { // Se l2 for diferente de null
            sum += l2.val; // Soma recebe o valor de l2
            l2 = l2.next; // l2 recebe o próximo valor
        }
        if (sum >= 10) { // Se a soma for maior ou igual a 10 
            carry = 1; // Carry recebe 1
            sum -= 10; // Soma recebe a subtração de 10
        } else { // Senão
            carry = 0; // Carry recebe 0
        }
        current.next = new ListNode(sum) // O próximo valor de current recebe a soma;
        current = current.next; // Current recebe o próximo valor
    } 
    if (carry) { // Se carry for verdadeiro
        current.next = new ListNode(carry); // O próximo valor de current recebe carry
    }

    return dummy.next; // Retorna o próximo valor de dummy
};