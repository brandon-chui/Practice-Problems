/**** 1. PALINDROME
 * Checking whether a string is a palindrome
Just as a quick reminder, a palindrome looks unchanged when it’s reversed. 
This means that processing a palindrome can be done from both directions 
and the same result will be obtained
For example, the word madam is a palindrome, while the word madame is not.

Input : "madam"
Output : true

Input : "monsieur"
Output : false
****/

//Write your code here :

import React from "react";

function Palindrome() {
  const [isPalindrome, setIsPalindrome] = React.useState(false);
  const input = "madam";

  React.useEffect(() => {
    function palindrome(str) {
      let i = 0;
      let j = str.length - 1;
      while (i <= j) {
        if (str[i] === str[j]) {
          i++;
          j--;
        } else {
          return false;
        }
      }
      return true;
    }
    setIsPalindrome(palindrome(input));
  });

  return (
    <>
      <div>Input: {input}</div>
      <div>Output: {isPalindrome.toString()}</div>
    </>
  );
}

export default Palindrome;
