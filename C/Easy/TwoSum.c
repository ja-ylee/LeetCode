#include <stdio.h>
#include <stdlib.h>

int *TwoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* arr = (int*)calloc(2, sizeof(int));
    *returnSize = 2;
    for (int i = 0; i < numsSize -1; i++) {
        for (int j = i+1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                arr[0] = i;
                arr[1] = j;
            }
        }
    }
    return arr;
}

int main(void) {
    int numsSize = 4;
    int nums[] = {2, 7, 11, 15};
    int target = 9;
    int returnSize;
    int* arr = TwoSum(nums, numsSize, target, &returnSize);
    printf("[%d, %d]\n", arr[0], arr[1]);
    return 0;
}