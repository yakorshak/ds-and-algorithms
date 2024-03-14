# 19. Remove Nth Node From End of List

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        p1 = head
        p2 = head

        for i in range(n):
            p1 = p1.next

        if p1 is None:
            return head.next

        while p1.next is not None:
            p1 = p1.next
            p2 = p2.next

        p2.next = p2.next.next

        return head