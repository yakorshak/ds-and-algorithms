// // 234. Palindrome Linked List

// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// function isPalindrome(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;
//   let prev = null;
//   let temp;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // now slow is a middle of the list
//   while (slow) {
//     // making reverse by changing pointer next
//     // from 1->2->3->2->1 to 1->2->3<-2<-1
//     temp = slow.next;
//     slow.next = prev;

//     // making step
//     prev = slow;
//     slow = temp;
//   }

//   fast = head;
//   slow = prev;

//   // slow is going from the end to the middle once reach null
//   while (slow) {
//     if (fast.val === slow.val) {
//       fast = fast.next;
//       slow = slow.next;
//       continue;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// todo fix ts problems
