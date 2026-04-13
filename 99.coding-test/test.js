// function isPalindrome(str) {
//   const reversedString = str.split("").reverse().join("");
//   console.log("reversedString", reversedString);
// }

// isPalindrome("test");

// function capitalize(str) {
//   const capitalizeString = str
//     .split(" ")
//     .map((val) => val[0].toUpperCase().concat(val.slice(1)))
//     .join(" ");
//   return capitalizeString;
// }

// console.log(capitalize("hello world"));

// function removeDuplicates(arr) {
//   const removeArr = [...new Set(arr)];
//   return removeArr;
// }

// console.log(removeDuplicates([1, 2, 3, 2]));

// function shuffle(arr) {
//   let result = arr;
//   result.forEach((_, i) => {
//     const j = Math.floor(Math.random() * result.length);

//     [result[i], result[j]] = [result[j], result[i]];
//   });

//   return result;
// }

// console.log(shuffle([1, 2, 3, 4]));

// function getMinMax(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   arr.forEach((num) => {
//     if (num > max) {
//       max = num;
//     } else if (num < min) {
//       min = num;
//     }
//   });
//   return { max, min };
// }

// console.log(getMinMax([1, 2, 3, 4, 5]));

// function getFizzBuzz() {
//   for (i = 0; i < 100; i++) {
//     let str = "";

//     if (i % 3 === 0) {
//       str += "Fizz";
//     }
//     if (i % 5 === 0) {
//       str += "Buzz";
//     }
//     console.log(str || i);
//   }
// }

// function isPrime(num) {
//   if (num < 2) return false;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
// console.log(isPrime(3));

// function countChars(str) {
//   const countCharsObject = {};

//   str.split("").forEach((val) => {
//     if (countCharsObject[val]) {
//       countCharsObject[val]++;
//     } else {
//       countCharsObject[val] = 1;
//     }
//   });

//   return countCharsObject;
// }

// console.log(countChars("apple"));

// function getMostChar(str) {
//   const map = {};
//   let max = 0;
//   let result = "";

//   str.split("").forEach((char) => {
//     map[char] ? (map[char] += 1) : (map[char] = 1);

//     if (map[char] > max) {
//       max = map[char];
//       result = char;
//     }
//   });

//   return result;
// }

// console.log(getMostChar("aplle"));

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(isAnagram("listen", "silent"));

// function longestWord(str) {
//   const words = str.split(" ");

//   return words.reduce((acc, val) => {
//     return acc.length > val.length ? acc : val;
//   }, words[0]);
// }
// console.log(longestWord("I love javascript"));

// function removeElement(arr, target) {
//   return arr.filter((val) => val !== target);
// }

// console.log(removeElement([1, 2, 3, 2, 4], 4));

// function twoSum(arr, target) {
//   const map = {};

//   return arr.reduce((acc, cur, i) => {
//     const need = target - cur;

//     if (map[need] !== undefined) {
//       return [map[need], i];
//     }

//     map[cur] = i;

//     return acc;
//   }, []);
// }

// twoSum([2, 7, 11, 15], 9);
// console.log(twoSum([2, 7, 11, 15], 9));

// function flatten(arr) {
//   return arr.flat(2);
// }

// console.log(flatten([1, [2, 3], [4]]));

// function rotate(arr, k) {
//   return [...arr.slice(arr.length - k), ...arr.slice(0, arr.length - k)];
// }

// console.log(rotate([1, 2, 3, 4], 1));
// function maxSubArray(arr) {
//   let max = 0;
//   arr.forEach((_, i) => {
//     arr.slice(i).reduce((sum, num) => {
//       sum += num;
//       if (sum > max) {
//         max = sum;
//       }
//       return sum;
//     }, 0);
//   });
//   return max;
// }
// function reverseNumber(n) {
//   return Number(String(n).split("").reverse().join(""));
// }

// console.log(reverseNumber(1234));

// function countPrime(n) {
//   let result = 0;
//   for (i = 2; i < n; i++) {
//     for (j = 0; j < Math.sqrt(n); j++) {
//       if (i % j === 0) {
//         result += 1;
//       }
//     }
//   }
//   return result;
// }

// console.log(countPrime(10));
