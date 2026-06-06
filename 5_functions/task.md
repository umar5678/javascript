
// ## 1.8 Convert Celsius to Fahrenheit

// 1. Take the temperature value in Celsius.
// 2. Multiply it by 9.
// 3. Divide the result by 5.
// 4. Add 32 to the result.
// 5. Return the final value as the temperature in Fahrenheit.

// **Example:** 0°C becomes 32°F.

// ---

// ## 1.9 Convert Fahrenheit to Celsius

// 1. Take the temperature value in Fahrenheit.
// 2. Subtract 32 from it.
// 3. Multiply the result by 5.
// 4. Divide the result by 9.
// 5. Round the answer to 2 decimal places.
// 6. Return the final value as the temperature in Celsius.

// **Example:** 68°F becomes 20°C.

// ---

// # 2.1 Capitalize First Letter

// 1. Check if the text is empty.
// 2. If it is empty, return an empty string.
// 3. Take the first character and convert it to uppercase.
// 4. Convert all remaining characters to lowercase.
// 5. Combine them together.
// 6. Return the formatted text.

// **Example:** `"hELLO"` becomes `"Hello"`.

// ---

// # 2.2 Convert Text to Title Case

// 1. Check if the text is empty.
// 2. If it is empty, return an empty string.
// 3. Split the text into individual words.
// 4. Capitalize the first letter of each word.
// 5. Join all words back together with spaces.
// 6. Return the final text.

// **Example:** `"hello world"` becomes `"Hello World"`.

// ---

// # 2.3 Count Vowels

// 1. Check if the text is empty.
// 2. If it is empty, return 0.
// 3. Create a list of vowels: A, E, I, O, U (both uppercase and lowercase).
// 4. Start a counter at 0.
// 5. Go through each character in the text.
// 6. If the character is a vowel, increase the counter by 1.
// 7. After checking all characters, return the counter.

// **Example:** `"Hello"` contains 2 vowels.

function countVowels(string) {
  if (!string || string.trim() === "") return `Enter a string: `;

  let vowelsCount = 0;
  let consonantsCount = 0;

  const vowel = "aeiouAEIOU";
  const consonants = "qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM";

  for (char of string) {
    if (vowel.includes(char)) {
      vowelsCount++;
    }

    if (consonants.includes(char)) {
      consonantsCount++;
    }
  }

  return {
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
}

// console.log(countVowels("Triangle"))
console.log(countVowels("world?"))
// console.log(countVowels("Triangle"));

// ---

// # 2.4 Count Consonants

// 1. Check if the text is empty.
// 2. If it is empty, return 0.
// 3. Start a counter at 0.
// 4. Examine each character in the text.
// 5. If the character is an alphabet letter and not a vowel:

//    * Increase the counter by 1.
// 6. Continue until all characters have been checked.
// 7. Return the final count.

// **Example:** `"Hello"` contains 3 consonants.

// ---

// # 2.8 Truncate a String

// 1. Check if the text is empty.
// 2. If it is empty, return an empty string.
// 3. Compare the text length with the maximum allowed length.
// 4. If the text is already within the limit:

//    * Return it unchanged.
// 5. Otherwise:

//    * Cut the text so there is enough space for the suffix.
//    * Add the suffix (such as "...") at the end.
// 6. Return the shortened text.

// **Example:** `"JavaScript Programming"` might become `"JavaScript..."`.

// ---

// # 2.5 Reverse a String

// 1. Check if the text is empty.
// 2. If it is empty, return an empty string.
// 3. Separate the text into individual characters.
// 4. Reverse the order of those characters.
// 5. Join them back together.
// 6. Return the reversed text.

// **Example:** `"hello"` becomes `"olleh"`.

// ---

// # 2.6 Check if Text is a Palindrome

// 1. Check if the text is empty.
// 2. If it is empty, return false.
// 3. Convert all letters to lowercase.
// 4. Remove spaces, punctuation, and special characters.
// 5. Create a reversed version of the cleaned text.
// 6. Compare the original cleaned text with the reversed text.
// 7. If both are identical:

//    * Return true.
// 8. Otherwise:

//    * Return false.

// **Example:** `"Madam"` is a palindrome because it reads the same forward and backward.

// ---

// # 2.10 Generate Initials

// 1. Check if the full name is empty.
// 2. If it is empty, return an empty string.
// 3. Split the name into separate words.
// 4. Take the first letter from each word.
// 5. Convert each letter to uppercase.
// 6. Join all initials together.
// 7. Return the result.

// **Example:** `"Umar Farooq"` becomes `"UF"`.

// ---

// # 3.1 Validate an Email Address

// 1. Check if the email is empty.
// 2. If it is empty, return false.
// 3. Find the position of the "@" symbol.
// 4. Find the position of the last "." symbol.
// 5. Ensure:

//    * The "@" symbol exists.
//    * The "." comes after the "@" symbol.
//    * There is at least one character after the last ".".
// 6. If all conditions are satisfied:

//    * Return true.
// 7. Otherwise:

//    * Return false.

// ---

// # 3.2 Validate a Pakistani Phone Number

// 1. Check if the phone number is empty.
// 2. If it is empty, return false.
// 3. Remove spaces and dashes.
// 4. Check whether the number:

//    * Starts with `03` and contains 11 digits, or
//    * Starts with `+923` and contains the correct number of digits.
// 5. If the format is correct:

//    * Return true.
// 6. Otherwise:

//    * Return false.

// ---

// # 3.3 Check if a Password is Strong

// 1. Check if the password is empty.
// 2. If it is empty, return false.
// 3. Verify that it contains:

//    * At least 8 characters.
//    * At least one uppercase letter.
//    * At least one lowercase letter.
//    * At least one number.
//    * At least one special character.
// 4. If all requirements are met:

//    * Return true.
// 5. Otherwise:

//    * Return false.

// ---

// # 3.4 Evaluate Password Strength

// 1. Check if the password is empty.
// 2. If it is empty:

//    * Return a score of 0.
//    * Return the level "None".
//    * Ask the user to enter a password.
// 3. Start the score at 0.
// 4. Check each security rule:

//    * Length of at least 8 characters.
//    * Length of at least 12 characters.
//    * Uppercase letters.
//    * Lowercase letters.
//    * Numbers.
//    * Special characters.
// 5. For every rule satisfied:

//    * Increase the score.
// 6. For every missing rule:

//    * Add a suggestion explaining what should be improved.
// 7. Determine the strength level based on the final score.
// 8. Return:

//    * The score.
//    * The strength level.
//    * Improvement suggestions.

// ---

// # 3.5 Validate Age

// 1. Check whether the value is a number.
// 2. If it is not a number:

//    * Return false.
// 3. Check whether the value is a whole number.
// 4. Verify that the age falls between the minimum and maximum allowed limits.
// 5. If all conditions are satisfied:

//    * Return true.
// 6. Otherwise:

//    * Return false.

// ---

// # 3.6 Validate a URL

// 1. Check if the URL is empty.
// 2. If it is empty, return false.
// 3. Verify that the URL follows a basic website structure:

//    * Optional protocol (`http` or `https`)
//    * Domain name
//    * Domain extension such as `.com`, `.org`, or `.pk`
//    * Optional path
// 4. If the format is valid:

//    * Return true.
// 5. Otherwise:

//    * Return false.

// ---

// # 3.7 Validate a CNIC Number

// 1. Check if the CNIC is empty.
// 2. If it is empty, return false.
// 3. Remove all dashes from the CNIC.
// 4. Check whether exactly 13 digits remain.
// 5. If yes:

//    * Return true.
// 6. Otherwise:

//    * Return false.

// ---

// # 4.1 Calculate Array Sum

// 1. Check if the array is empty.
// 2. If it is empty, return 0.
// 3. Start a total at 0.
// 4. Go through each number in the array.
// 5. Add each number to the total.
// 6. After processing all numbers, return the total.

// **Example:** `[2, 3, 5]` returns `10`.

// ---

// # 4.2 Calculate Array Average

// 1. Check if the array is empty.
// 2. If it is empty, return 0.
// 3. Calculate the sum of all numbers.
// 4. Divide the sum by the total number of items.
// 5. Return the average value.

// **Example:** `[10, 20, 30]` returns `20`.

// ---

// # 4.3 Find a Value in an Array

// 1. Check if the array exists.
// 2. If it does not exist, return -1.
// 3. Start from the first element.
// 4. Compare each element with the target value.
// 5. If a match is found:

//    * Return its position.
// 6. If the entire array is checked and no match is found:

//    * Return -1.

// ---

// # 4.4 Find the Smallest Value in an Array

// 1. Check if the array is empty.
// 2. If it is empty, return nothing.
// 3. Assume the first value is the smallest.
// 4. Compare it with every remaining value.
// 5. Whenever a smaller value is found:

//    * Update the smallest value.
// 6. After all comparisons, return the smallest value.

// ---

// # 4.5 Find the Largest Value in an Array

// 1. Check if the array is empty.
// 2. If it is empty, return nothing.
// 3. Assume the first value is the largest.
// 4. Compare it with every remaining value.
// 5. Whenever a larger value is found:

//    * Update the largest value.
// 6. After all comparisons, return the largest value.

// ---

// # 4.6 Count Occurrences of a Value

// 1. Check if the array exists.
// 2. If it does not exist, return 0.
// 3. Start a counter at 0.
// 4. Examine every element in the array.
// 5. If an element matches the target value:

//    * Increase the counter by 1.
// 6. Return the final count.

// **Example:** Counting `5` in `[5, 2, 5, 7, 5]` returns `3`.

// ---

// # 4.7 Remove Duplicate Values

// 1. Check if the array exists.
// 2. If it does not exist, return an empty array.
// 3. Create a new empty collection for unique values.
// 4. Go through each item in the original array.
// 5. If the item is not already in the unique collection:

//    * Add it.
// 6. Continue until all items have been checked.
// 7. Return the collection containing only unique values.

// ---

// # 4.8 Generate Array Statistics

// 1. Check if the array is empty.
// 2. If it is empty:

//    * Count = 0
//    * Sum = 0
//    * Average = 0
//    * Minimum = none
//    * Maximum = none
// 3. Otherwise:

//    * Count the total number of items.
//    * Calculate the sum of all values.
//    * Calculate the average.
//    * Find the smallest value.
//    * Find the largest value.
// 4. Return all these statistics together as a summary.

// **Example Output:**

// * Count: 5
// * Sum: 120
// * Average: 24.00
// * Minimum: 10
// * Maximum: 40
