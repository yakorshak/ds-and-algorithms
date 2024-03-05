class Solution(object):
    # Solution
    """
    Way of thinking:
    1. It will be only num so return false
    2. Iterate over the nums list and put values in the hash map as "no longer unique"
    3. If value already exist in hash_map - return True
    4. In all the different cases - False
    """

    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        self.hash_map = {}
       
        if len(nums) == 1:
            return False 

        for num in nums: 
            if self.hash_map.get(num) is None: 
                self.hash_map[num] = "no longer unique"
                continue
            else:
                return True
        return False
        
    """
    Time complexity: O(n)
    Space complexity: O(n)
    """