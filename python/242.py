# 242. Valid Anagram

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
    
        s_sorted = sorted(s)
        t_sorted = sorted(t)

        t_index = 0

        # This check is necessary to prevent index out of range error
        if len(s_sorted) != len(t_sorted):
            return False

        for letter in s_sorted:
            if letter == t_sorted[t_index]:
                t_index = t_index + 1
                continue
            else: 
                return False
        return True

        """
        Time complexity: O(n log(n))
        Space complexity: O(n)
        """
