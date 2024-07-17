var lengthOfLongestSubstring = function(s){
    let n = s.length;
    let set = new Set();
    let maxLength = 0, i=0, j=0;

    while(i < n && j < n){
        console.log("n", n);
        if(!set.has(s[j])){
            console.log("j", s[j]);
            set.add(s[j]);
            j++;
            maxLength = Math.max(maxLength, j - i);
        }
        else{
            set.delete(s[i]);
            i++;
            console.log("i", i);
        }
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3