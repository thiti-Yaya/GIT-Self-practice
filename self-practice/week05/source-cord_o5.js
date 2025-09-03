// Array
const studentScore = [
    { name: 'Alice', score: 85},
    { name: 'Bob', score: 92},
    { name: 'Charlie', score: 68},
    { name: 'David', score: 55},
    { name: 'Eve', score: 78}
];

// .amp
// function getPassingNames(studentList){
//     return studentList
//          .filter(student => student.score >= 70)
//          .map(student => student.name.toUpperCase())
// }

// const passingNames = getPassingNames(studentScore)
// console.log(passingNames);


// imperative programming
function getPassingNames(studentScores) {
    let result = [];
    for (let i = 0; i < studentScores.length; i++) {
        let student = studentScores[i];
        if (student.score >= 70) {
            result.push(student.name.toUpperCase());
        }
    }
    return result;
}


const passingNames = getPassingNames(studentScore)
console.log(passingNames);


console.log(Array.isArray([])) // true
console.log(Array.isArray([1, true])) //true
console.log(Array.isArray("[")); // false

const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = array1.concat(array2)
console.log(array3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//convert to string
console.log(array3.toString()); // a,b,c,d,e,f

const nums =[1, 2, 3]

const array14 = [1, 30, 4, 21, 100000]
//array14.sort(((a, b) => a - b))
array14.sort((item1,item2) => item1-item2)
console.log(array14)


const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 150, name: "Boonchai", email: "Boonchai@sit.kmutt.ac.th" },
  { id: 100, name: "ada", email: "ada@sit.kmutt.ac.th" },
  { id: 50, name: "pichai", email: "pichai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
stds.sort((a, b) => a.name.localeCompare(b.name));
console.log(stds); 
// [
//   { id: 100, name: 'ada', email: 'ada@sit.kmutt.ac.th' },
//   { id: 150, name: 'Boonchai', email: 'Boonchai@sit.kmutt.ac.th' },
//   { id: 50, name: 'pichai', email: 'pichai@sit.kmutt.ac.th' },
//   { id: 5, name: 'Pornchai', email: 'pornchai@sit.kmutt.ac.th' },
//   { id: 2, name: 'Suda', email: 'suda@sit.kmutt.ac.th' },
//   { id: 1, name: 'Tisanai', email: 'tisanai@sit.kmutt.ac.th' }
// ]

// concat()
const array11 = ['a', 'b', 'c']
const array12 = ['d', 'e', 'f']
const array13 = array11.concat(array12)
console.log(array13) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


//findIndex() -> return index of the first element , it return -1 
// (parameter: callback function ที่ทำหน้าที่ให้เงื่อนไข && เหมาะกับarrayที่ซับซ้อน e.g.object)
//indexOf() -> return first index, or -1 if it is not present 
// (เหมาะกับarray ที่เป็นตัวเลข/string ธรรมดา)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison'))// 1
// start from index 2
console.log(beasts.indexOf('bison', 2))// 4
console.log(beasts.indexOf('giraffe'))// -1

//join() -> เปลี่ยน array เป็น string, สามารถใส่ separator ได้ (e.g. comma, -, space)
const element = ['Fire', 'Air', 'Water']
console.log(element.join()); // Fire,Air,Water
console.log(element.join(' '));// Fire Air Water



//////////////////////////////////////////////

//import 

//import { getLength } from "./Utility.js" // Name export  
// but ถ้าเป็นexport default ไม่ต้องใช้{}และตั้งชื่ออะไรก็ได้
// import gerStrLength from "./Utility.js"
// console.log(getStrLength("Introduction to JS"));
//console.log(getLength("Introduction to JS"));
// ในไฟล์ ไฟล์นึงเราอาจจะเลือก exportบางอย่าง ไม่exportบางอย่างได้
// จะexportได้ ต้องได้สิทธิ์exportออกมาก่อน ว่าเขาexportมาให้เราใช้ ไม่export ก็ใช้ไม่ได้

// import { echo, TAX } from "./Utility.js"
// console.log(echo('No one perfect'));
// console.log(TAX);
// console.log(strLength("Frontend"));

// change echo -> repeat
import strLength, { Book, echo as repeat, VAT } from "./Utility.js"
const b1 = new Book(1234, 'JS Beginner') 
console.log(b1);
console.log(repeat('No one perfect'));
console.log(VAT);
console.log(strLength("Frontend"));




// export

function echo(value) {
  return value;
}
function getLength(str){
    return str.length
}
//export function getLength(str) {
// export default function getLength(str) -> เติมkeyword default = export default (default ได้แค่จุดเดียว) 
//   return str.length;
// }
const TAX = 0.07;
const x = 1
class Book{
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}


//export list
// export { echo, getLength, TAX }
// export { echo, getLength as default, TAX as VAT}
export { Book, echo, getLength as default, TAX as VAT} // export class
//change TAX->VAT

// function  echo(value){
//     return value
// }
// const getLength = (str) => str.length
// const MAXSTUDENT = 60
// module.exports = { echo, getLength, MAXSTUDENT } //{echo:echo, getLength:getLength, MAXSTUDENT:MAXSTUDENT} -> คือ ชื่อproperty = ชื่อ function

// default export
// module.exports = echo

// name eport
// module.exports = { echo }  // -> มาจาก object {echo:echo}






//
// const ech = require("./Utility.js")
// console.log(ech ("do something..."));

// commonJS syntax เป็นsyntax ที่ใช้node.js รัน โดยการเริ่มแบ่่งmodule แยกไฟล์ออกมา
const { echo, getLength, MAXSTUDENT }= require("./Utility.js") // require ตามด้วย path กับ ชื่อไฟล์
console.log(echo("do something..."));
//เรียก getLength
console.log(getLength("INT151"));
console.log(MAXSTUDENT);




// const { echo, getLength, MAXSTUDENT } = require ("./utility.js")
// console.log(echo("do something..."));
// console.log(getLength("INT151"));
// console.log(MAXSTUDENT);


