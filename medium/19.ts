/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// @ts-ignore
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // @ts-ignore
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let left = dummyNode;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return dummyNode.next;
}
