//โจทย์จากในclass

// create array with many data typs
// arr เก็บค่าหลายชนิดรวมกัน (number, string, boolean)
let a = 10;
let b = "hello";
let c = false;

let arr = [a,b,c];
console.log(arr); // [ 10, 'hello', false ]
console.log(`length = ${arr.length}`); // length = 3 (.length คือจำนวนสมาชิกใน array)
console.log(`first item = ${arr[0]}`); // first item = 10  (arr[0])=ตัวแรก
console.log(`last item = ${arr[arr.length - 1]}`); // last item = false    arr[arr.length - 1]=ตัวสุดท้าย

for (let i= 0; i < arr.length; i++) { // print every item in the array
    console.log(arr[i]); 
}

//growing
arr[arr.length]='TT'
arr[arr.length]='YY'
console.log(arr); // [ 10, 'hello', false, 'TT', 'YY' ]

//shrinking
console.log(arr.length); // 5

arr.splice(0,3) 
console.log(arr.length); // 2
console.log(arr); // [ 'TT', 'YY' ]
console.log(arr.pop()); // YY
console.log(arr); // [ 'TT' ]




//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
// console.log(colors);
console.log(colors[1]); // { id: 2, name: 'purple', tone: 'cool' }

 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
// console.log(contacts)
console.log(contacts[0].email[1]); // foo@kmutt.ac.th
console.log(contacts[1].address[1]); // Puket


 

//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
// console.log(groups)


console.log(groups[0][1]);
console.log(groups.map(group => group[group.length - 1])); // [ 'Jane', 'Pete' ]]); // Jane
console.log(groups[1][2]); // Pete