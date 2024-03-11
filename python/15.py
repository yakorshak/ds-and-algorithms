# 15. 3 Sum

from typing import List

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        output = []
        # Space complexity = O(n)
        nums.sort()
        target = 0
        
        for i in range(0, len(nums) - 2): 
            # ensure we have no duplicate
            high = len(nums) - 1
            low = i + 1  
             
            if i > 0 and nums[i] == nums[i - 1]:
                continue 

            while low < high:
                expression = nums[i] + nums[low] + nums[high]
                
                if expression < target: 
                    low += 1 
                    continue
                
                if expression > target: 
                    high -= 1
                    continue

                if expression == target: 
                    output.append([nums[i], nums[low], nums[high]])

                    while low < high and nums[low] == nums[low + 1]:
                        low += 1
                    while low < high and nums[high] == nums[high - 1]: 
                        high -= 1

                    low += 1
                    high -= 1
                    continue 
                    
        return output



        