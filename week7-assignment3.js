// Problem #1: Please solve using any pattern or brute force method

//! CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
    const reverse = str.split('').reverse().join('')
    return reverse
}
// console.log(reverseString('hello'))

//! CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
    if(!str.length) return true
    
    if(str[0] === str[str.length - 1]){
        let newStr = str.slice(1, -1)
        return isPalindrome(newStr)
    } else {
        return false
    }
}
// console.log(isPalindrome('hello'))

//! CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
    const stringed = int.toString()
    const int2 = stringed.split('').reverse().join('')
    return int2
}
// console.log(reverseInt(521))

//! CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    if(!str.length) return []

    let str1 = str.split(' ')

    for(let i = 0; i < str1.length; i++){
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1)
    }
    return str1.join(' ')
}
// console.log(capitalizeLetters('i love javascript'))

//! CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    let freqCounter = {}

    for(let i of str){
        freqCounter[i] = (freqCounter[i] || 0) + 1
    }

    const values = Object.values(freqCounter)
    const max = Math.max(...values)

    for(let key in freqCounter){
        if(freqCounter[key] === max){
            return key
        }
    }
}
// console.log(maxCharacter('javascript'))

//! CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the 
// number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 
// and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        if(!(i % 3) && !(i % 5)){
            console.log('FizzBuzz')
        
        } else if(!(i % 3)){
            console.log('Fizz')
        
        } else if(!(i % 5)){
            console.log('Buzz')
        
        } else{
            console.log(i)
        }
    }
}
// fizzBuzz()

//! CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
 // SOLUTION 1 - Return a single longest word
 // SOLUTION 2 - Return an array and include multiple words if they have the same length
 // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

    let storage = []
    let arr = sen.split(' ')
    const max = Math.max(...arr.map(n => n.length))

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length === max){
            storage.push(arr[i])
        }
    }

    if(storage.length === 1){
        return storage.toString()
    } else{
        return storage
    }
}
// console.log(longestWord('Hi there my name is Bradd'))

//! CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
    let tempArray = []
    for (i=0; i < arr.length; i += len) {
        tempArray.push(arr.slice(i, i + len))
    }
    return tempArray

}
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)) 

//! CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    let join = arrays.flat()
    return join
}
// console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

//! CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if(str1.length !== str2.length){
        return false
    }
 
    let str = str2.split('')
    console.log(str)

    for(let n of str1){
        if(!str.includes(n)){
            return false
        } else {
            str.splice(str.indexOf(n), 1)
        }
    }
    return true
}
// console.log(isAnagram('elbow','below'))
// console.log(isAnagram('Dormitory','dirty room##'))

//! CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    return str
    // charCode returns a Unicode value
    // String.fromCharCode --> returns a string from the specified sequence 
    // .charCodeAt --> returns a integer between 0 to 65535 UTF-16 code
    .replace(/[a-zA-Z]/g, (x) =>  String.fromCharCode(x.charCodeAt(0)+1))
    .replace(/[aeiou]/g, (v) => v.toUpperCase())
}
// console.log(letterChanges('hello there'))

//! CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20
function addAll(...num) {
    let sum = 0

    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return sum
}
// console.log(addAll(2,5,6,7))

//! CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
// number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
function sumAllPrimes(num) {
    let sumArr = []

    for(let i = 0; i <= num; i++){
        if(isPrime(i)){
            sumArr.push(i)
        }
    }
    return sumArr
}
console.log(sumAllPrimes(10))

//! CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
function seekAndDestroy() {}

//! CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. 
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight() {}

//! CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, 
// return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingLetters() {}

//! CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
function evenOddSums() {}

//! Problem #18
// There is a malfunctioning keyboard where some letter keys do not work.
// All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces) 
// and a string brokenLetters 
// of all distinct letter keys that are broken, return the number of
// words in text you can fully type using this keyboard.
// Example 1:
// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.
// Example 2:
// Input: text = "leet code", brokenLetters = "lt"
// Output: 1
// Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
// Example 3:
// Input: text = "leet code", brokenLetters = "e"
// Output: 0
// Explanation: We cannot type either word because the 'e' key is broken.
// Constraints:
// 1 <= text.length <= 104
// 0 <= brokenLetters.length <= 26
// text consists of words separated by a single space without any leading or trailing spaces.
// Each word only consists of lowercase English letters.
// brokenLetters consists of distinct lowercase English letters.
const canBeTypedWords = (text, brokenLetters) => {
}