class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        def findi(arr):
            maxi= max(arr)
            for i in range(len(arr)):
                if arr[i] == maxi:
                    return i

        idx = findi(arr)
        arr1 = arr[:idx]
        arr2 = arr[idx+1:]
        if len(arr) < 3:
            return False
        elif arr1 == arr2:
            return True
        elif arr1 == sorted(arr1) and arr2 == sorted(arr2[::-1]):
            return True



