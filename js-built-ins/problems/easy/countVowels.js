/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
    new_str=str.toLowerCase()
    cnt=0
    for(let i=0 ;i<new_str.length;i++){
      if(new_str[i]=='a' || new_str[i]=='e' || new_str[i]=='i' || new_str[i]=='o' || new_str[i]=='u'){
        cnt+=1
      }
    }
    return cnt
}

module.exports = { countVowels };


