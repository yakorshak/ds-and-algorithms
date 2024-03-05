// // 876. Middle of the Linked List

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

// function middleNode(head: ListNode | null): ListNode | null {
//   let slow = head;
//   let fast = head;

//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   if (fast.next) {
//     return slow.next;
//   }

//   return slow;
// };

// TODO resolve ts problem
