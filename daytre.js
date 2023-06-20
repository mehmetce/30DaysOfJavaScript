//Booleans represent one of the 2 valuees true or no 
let isLigthOn = true
let isRainning = true
let isMarried = false
let truValue = 4 > 3 // true 
let falseValue = 4 < 3 // false
// Now if we aggreed thet boolean value are either true or false 
// Truhy Values 
//*ALL numbers (positive and negative ) are truthy except zero
//*ALL strings are truthy except an empty string("")
//* The boolean "true"
//Falsy values
//** 0 , 0n , null , undefined , NaN , the boolean false, empty strings ( "",'',``) like this


//Undefined 
let firstName 
console.log(firstName)
//NULL
let empty = null
console.log(empty) // -> null , means no value


//OPERATORS  = (equal operator is a assigment opertor . It uses to assign a variable .)
let cityName = 'Los Angeles'
let country = 'USA' 
/* examples 
{
  =  y is stored in x            (x = y) / x = y
  +=  x+y result is stored in x  (x+= y) / x = x + y
  -= x-y result is stored in x   (x-= y) / x = x - y
 ' *= x*y result is stored in x '(x*= y) / x = x * y
  /=    result is stored in x    (x/= y) / x = x / y
  %=    result is stored in x    (x%= y)  / x = x % y
  **=   result is stored in x    (x**=y) / x = x ** y
} */    

/*            Comparison Operators 
console.log(14 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(14< 53)              // false,  because 3 is greater than 2

console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2

console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
*/
 

/*Logical Operators 
The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true. */
// && ampersand operator example
/*
const checka = 4 > 3 && 10 > 5         // true && true -> true
const checka = 4 > 3 && 10 < 5         // true && false -> false
const checka = 4 < 3 && 10 < 5         // false && false -> false

 || pipe or operator, example

const checka = 4 > 3 || 10 > 5         // true  || true -> true
const checka = 4 > 3 || 10 < 5         // true  || false -> true
const checka = 4 < 3 || 10 < 5         // false || false -> false



let checka = 4 > 3                     // true
let checka = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarriedi = !false                // true */
  
/*
Increment Operator
In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
Post-increment
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
We use most of the time post-increment. At least you should remember how to use post-increment operator.  */


//alert('how are you ?')//
prompt('Bir sayı girin')
prompt('Bir sayı girin','default value')

let isDelete = confirm('silmek istediğine emin misin?') //deletion process
isDelete ? 'silme işlemi başarılı' : 'silme işlemi başarısız' // successful or cancelled