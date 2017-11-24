# Find the longest consecutive subsequence
Javascript Solution for finding the length of the longest subsequence of consecutive numbers in array of numbers

This is a pretty simple repo - a JS function that accepts an unsorted array of numbers, then finds the length of the longest sequence of consecutive numbers. Ie, for an input of [1,2,8,4,6,3], the function, will return 4, as this is the length of the longest range of consecutive numbers within the array [1,2,3,4]

If there is no such sequence, the function returns 1.

The function has a time complexity of (2n) and a space complexity of (n) through the use of a hashmap. The research I've done into this problem describes this algorithm as the most efficent. However, while I found implementations of this algorithm in several languages, I found non in Javascript; the Javascript solutions to this problem that did exist used other, less efficient algorithms.

I consider this a "dead" repo - I don't plan to look at this again, and I'll probably ignore pull requests to this repo. But I hope this adds a solution that I did not find anywhere else. 

NOTE: 
1. There are no driver functions, no runtime, and no provision for accepting command line arguments - if you want to use this function, you'll have to add those features yourself, or copy the code into an actual script or program.
2. The inputs are not guarded - this function is not protected against being fed a non-array input, or an empty array, or an array of non-numbers.
