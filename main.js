function findLongestSubsequence (inputArray) {
  let trackerObj = {}; //an object literal - this will act as a hashmap
  let longest = 1;
  for (let i = 0; i < inputArray.length; i ++) { //create the hashmap
    trackerObj[inputArray[i]] = true;
  }
  
  for (var key in trackerObj) {
    if (!trackerObj[key - 1]) {
      let curr = key;
      let count = 0;
      while (trackerObj[curr] + 1) {
        count ++;
        curr ++;
      }
    longest = Math.max(longest, count)
    }  
  }
  return longest;
}
