// 1.Write a function addProperty(obj, key, value) that adds a new
// property to an object and returns the updated object.

function addProperty (obj, key, value) {
    obj[key] = value; //กำหนด ker ใหม่ให้กับค่า value
    return obj; 
}

console.log(addProperty({name:'John'},'age',25)); // { name: 'John', age: 25 }
console.log(addProperty({}, 'city', 'New York')); // { city: 'New York' }



// 2.Write a function mergeObject(obj1, obj2) and return merges two objects.

function mergeObject(obj1, obj2) {
    return {...obj1, ...obj2} // ใช้ spread operator รวม object
}

console.log(mergeObject({name: "Alice"}, {age:25})); // { name: 'Alice', age: 25 }
console.log(mergeObject({a: 1, b: 2}, {b: 3, c: 4})); // { a: 1, b: 3, c: 4 }


//Write a function getFreqOfWords(sentence) that returns an object with keys representing
//unique words in lowercase and values representing the frequency of occurrences of each
//word with ignore case in the sentence. If the input string is null or undefined, return undefined.

function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) { // เช็ค null/undefind
        return undefined;
    }
    sentence = sentence.toLowerCase(); // แปลงประโยคเป็นตัวพิมพ์เล็ก
    let words = sentence.split(" "); // แยกคำด้วยช่องว่าง
    let freq = {}; // สร้างobject เก็บความถี่

    for (let word of words) {
        if(word) { // ข้ามค่าว่าง
            freq[word] = (freq[word] || 0) + 1; // นับจำนวนครั้งของคำที่เจอ
        }
    }
    return freq;
}
console.log(getFreqOfWords("Today is present and present is your gift")); // { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null)) // undefined
console.log(getFreqOfWords(undefined)) // undefined


//Write a function extractAndRename(obj) that extracts properties
//name and age from an object, renames them to fullName and
//yearsOld, and returns a new object with these properties.
function extractAndRename(obj){
    let { name, age } = obj; // ดึง name และ age
    return {
        fullname: name, // เปลี่ยนชื่อ เป็น fullname
        yearsOld: age // เปลี่ยนชื่อ เป็น yearsOld
    };
}
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' })) // { fullname: 'John', yearsOld: 25 }
console.log(extractAndRename({ name: 'Jane', age: 30 })) // { fullname: 'Jane', yearsOld: 30 }


//Write a function mergeAndDestructure(obj1, obj2) that merges two
//objects using the spread operator, and then destructures the merged
//object to extract specific properties. Return an object with the extracted properties.
function mergeAndDestructure(obj1, obj2) {
    const merged = {...obj1, ...obj2}; // รวม object ด้วย spread
    const { name, age } = merged; // ดึง property name และ age
    return { name, age }; // คืน object ที่มีเฉพาะ name และ age
}

console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })); // { name: 'John', age: 25 }
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })) // { name: 'Jane', age: 30 }

//Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new
//string with all duplicate words removed, while preserving the order of the first occurrence of
//each word. The function should be case insensitive, but the output should maintain the original
//casing. If the input is null, undefined, or an empty string, return an empty string.

function removeDuplicateWords(sentence) {
    if (!sentence) {
        return ""; // คืนค่าว่างถ้า null/undefined/empty
    }
    const words = sentence.split(" "); // แยกคำเป็น array
    const seen = []; // แยกคำเป็น array
    const result = []; // เก็บคำที่ไม่ซ้ำ

    for (let i = 0; i < words.length; i++) { // แปลงเป็น lowercase
        const word = words[i];
        const lower = word.toLowerCase();

        if (!seen.includes(lower)) {
        seen.push(lower);   // ถ้ายังไม่เจอ เพิ่มลงในseen
        result.push(word);  
        }
    }
    return result.join(" "); // รวมค่าเป็น string
}
console.log(removeDuplicateWords("This is a test This test is easy")); // This is a test easy
console.log(removeDuplicateWords("Hello world")); // Hello world
console.log(removeDuplicateWords("One two two three three three")); //One two three
console.log(removeDuplicateWords("")); // ""
console.log(removeDuplicateWords(null)); // ""


// Write a function findValue(arr) that takes an array of numbers and
//returns an object with the following properties:
//• min: the minimum value in the array
//• max: the maximum value in the array
//• sum: the sum of all the values in the array
//• avg: the average of all the values in the array
//For example, given the array [1, 2, 3, 4, 5], the function should return:
//{ min: 1, max: 5, sum: 15, avg: 3 }
function findValue(arr) {
    if (!arr || arr.length === 0) return {}; // เช็ค array

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
        sum += num;
    }

    let avg = sum / arr.length; // หาค่าเฉลี่ย

    return { min, max, sum, avg};  // คืน object
}

console.log(findValue([1,5,20,4,8])); // { min: 1, max: 20, sum: 38, avg: 7.6 }
console.log(findValue([10, 4, 2, 6])); // { min: 2, max: 10, sum: 22, avg: 5.5 }

//Write a function convertToUppercase(arr) that takes an array of
//strings and returns a new array with all strings converted to uppercase.
function convertToUppercase(arr) {
    if (!arr || !Array.isArray(arr)) return []; // เช็ค input ที่ไม่ใช่ arrray
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].toUpperCase());  // แปลงเป็นตัวพิมพ์ใหญ่
    }
    return result;
}
console.log(convertToUppercase(["apple", "banana", "cherry"])); // [ 'APPLE', 'BANANA', 'CHERRY' ]

// Write a function findMax(arr) that takes an array of numbers and
// returns the maximum value using the reduce method.
function findMax(arr) {
    if (!arr || arr.length === 0) return undefined; 

    return arr.reduce (function (max, num) {  // เปรียบเทียบและเก็บค่าที่มากที่สุด
        if (num > max) {
            return num;
        } else {
            return max; 
        }
    });
}
console.log(findMax([1,2,3,4])); // 4
console.log(findMax([10,5,8,7])); // 10

// Write a function removeFalsyValues(arr) that takes an array and
// returns a new array with all falsy values removed. Falsy values include
// 0, empty string, false, null, and undefined.
function removeFalsyValues(arr){
    const result = []; // สร้าง arr ใหม่ เก็บค่าที่ไม่falsy
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) { // เช็คว่าป็น truthy ไหม
            result.push(arr[i]) // ถ้าใช่ เก็บไว้
        }
    }  
    return result;
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // [ 1, 2, 3 ]
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])); // [ 'a', 'b', 'c' ]
console.log( removeFalsyValues([null, undefined, 'A'])); // [ 'A' ]

//  Write a function doubleAndFilterEvenNumbers(arr) that takes an
// array of numbers, filter out odd numbers and returns a new array
// with doubled numbers.
function doubleAndFilterEvenNumbers(arr) {
    const result = []; //สร้าง array เก็บค่า
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] % 2 === 0) { // เช็คว่าเป็นเลขคู่
            result.push(arr[i] * 2); // ถ้าใช่ คูณ 2แล้วเก็บ
        }
    }
    return result;
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4])); // [ 4, 8 ]
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8])); // [ 4, 8 ]

// Write a function filterEvenNumbers(arr) that takes an array of
// numbers and returns a new array with only the even numbers.
function filterEvenNumber(arr) {
    const result = []; // สร้าง array เก็บเลขคู่
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) { // ถ้าเป็นเลขคู่
            result.push(arr[i]);
        }
    }
    return result; // คืนค่า array ที่เป็นเลขคู่
}
console.log(filterEvenNumber([1, 2, 3, 4])); // [ 2, 4 ]
console.log(filterEvenNumber([5, 6, 7, 8])); // [ 6, 8 ]


// Write a function populateArray(length, value) that creates an array of
// given length and fills it with the specified value.
function populateArray(length, value) {
    const result =[];
    for (let i = 0; i < length; i++) { // วนลูป 0 ถึง length-1
        result.push(value);  // ใส่ค่า value ลงไปทีละตัว
    }
    return result; // คืนค่า array ที่สร้างได้
}
console.log(populateArray(3, 'a')); // [ 'a', 'a', 'a' ]
console.log(populateArray(5,0)); // [ 0, 0, 0, 0, 0 ]

function sqareNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]); // ยกกำลัง 2 และเก็บลง result
    }
    return result;
}
console.log(sqareNumbers([1, 2, 3, 4])); // [ 1, 4, 9, 16 ]
console.log(sqareNumbers([5, 6]));// [ 25, 36 ]

// Write a function processNumbers(arr) that takes an array of
// numbers, squares each number, filters out the even numbers, and
// returns the sum of the remaining numbers.
function processNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sqared = arr[i] * arr [i]; // ยกกำลัง 2

        if (sqared % 2 !== 0) {
            sum+= sqared; // ถ้าเป็นคี่ จะเข้าเงื่อนไขนี้ จะทำการบวก
        }
    }
    return sum; // คืนผมรวม
}
console.log(processNumbers([1, 2, 3, 4])); // 10 (1^2 + 3^2)
console.log(processNumbers([5, 6, 7, 8])); // 74 (5^2 + 7^2) 

