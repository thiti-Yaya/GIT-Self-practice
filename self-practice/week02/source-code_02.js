//Shallow Equality
let book1 = {
  isbn: 123456789, 
  title: "JavaScript",
}
let book2 = {
  isbn: 123456789, 
  title: "JavaScript",
}

function shallowEquality (object1, object2) {
  const keys1=Object.keys (object1) 
  const keys2=Object.keys (object2)

  if (keys1.length !== keys2.length) { 
    return false  
  }
  for (let key of keys1){ 
    if(object1[key] !== object2[key]) {
    return false 
    }
  }
  return true
}
console.log ("shallow equality: " + shallowEquality(book1, book2)) //true  


const std = {name: 'Yaya',age: 20,gender: 'Female'} 
const profile = [{id: '075'},{firstname:'Thitiworrada'},{lastname:'Phetsean'} ] 
console.log(std); // { name: 'Yaya', age: 20, gender: 'male' }
console.log(profile); // { id: '075' }, { firstname: 'Thitiworrada' }, { lastname: 'Phetsean' }

let b1={id:1, title:"JS"}
const b2={id:1, title:"JS"}

console.log(b1==b2) // false
console.log(b1===b2) // false
console.log(Object.is(b1,b2)) // false

b1=b2
console.log(b1==b2) // true
console.log(b1===b2) // true
console.log(Object.is(b1,b2)) // true

// 1. object literal
// const book={isbn:12345678, title:'Introduction to JS', getISBN:function(){return this.isbn}}
//const book={isbn:12345678, isbn:88888888, title:'Introduction to JS',authors:[{firstname:'John'},
     //{lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0],
     // isAvailable:true, getISBN(){return this.isbn}}
// console.log(book)
// console.log(book.getISBN())
// console.log(book.authors) //array
// console.log(Object.values(book.authors))
//new Date(year, monthIndex, day)
// book.publishDate=new Date(2025, 1, 1)
//  console.log(book)
// delete book.isAvailable
// console.log(book)
// console.log(book["publishDate"])
// console.log(book.publishDate)
// for (const key in book) {
//     console.log(book.key) //not allowed
// console.log(book[key])
// }
 

// // 2.constructor function
// function Book(isbn, title){
//     this.isbn=isbn
//     this.title=title
// }

function Person(name, email){
        this.name = name
        this.email = email
        this.sayhi = function(){
            console.log(`Hi , My name is ${this.name}`);
        }
    }

    const p1 = new Person("YY" , "Yuyy@gmail.com")
    const p2 = new Person("TT", "Thiti@gmail.com")

    p1.sayhi() // Hi , My name is YY
    p2.sayhi() // Hi , My name is TT

    console.log(p1); // Person {name: 'YY', email: 'Yuyy@gmail.com', sayhi: [Function (anonymous)]}
    console.log(p2); // Person {name: 'TT',email: 'Thiti@gmail.com',sayhi: [Function (anonymous)]}

  

//3.class
// class Book{
//     constructor(isbn, title){
//         this.isbn=isbn
//         this.title=title
//     }
//     getISBN(){
//         return this.isbn
//     }
//     setTitle(title){
//         this.title=title
//     }
//     getBookInfo(){
//         return `isbn: ${this.isbn}, title: ${this.title}`
//     }
// }

// Class (ES6)
// const myBook=new Book(12345678, 'JS Beginner')
// // console.log(myBook.getBookInfo())
// // console.log(myBook.getISBN())
// // console.log(myBook.setTitle('JS for Beginner'))
// // console.log(myBook.getBookInfo())

// //4. using Object.create(existingObj)
// const journal=Object.create(myBook)
// journal.ISSN=587904
// console.log(journal)
// console.log(journal.isbn)
// console.log(journal.title)


// console.log(`Hello, ${book}, Good bye, ${journal.toLowecase()}`);


////////////////////////////////////
let person = {
    firstname: "Thiti" ,
    lastname: "Suk" ,
    age: 20 ,

    getFullname: function(){
        return `My name is ${this.firstname} ${this.lastname}`
    } ,
    celebrateBirthday: function(){
        this.age++
    }
}
console.log(person.getFullname()); // My name is Thiti Suk
console.log(person.age); // 20




function compareBook(x,y) {
    //boolean confition?true expression:flase expression
    //return x.isbn===y.isbn?true:flase
    if(x.isbn===y.isbn)
          return true
    else
        return false

}

const keys=Object.keys(b1) //array of keys //[ 'isbn', 'title']
const values=Object.values(b1) //array of values //[ 123, 'JS']
console.log(keys) // [ 'id', 'title' ]
console.log(values)// [ 1, 'JS' ]