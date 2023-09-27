"use strict";
// for(let i = 0 ; i < 4 ; i++){ //loop
//     console.log(i)
// }
// for(let i = 1 ; i <= 10 ; i++){    //inner loop
//     for(let j=1 ;  j <= 10 ; j++){
//         let b = i * j
//         console.log(`${i} * ${j} = ${b}`)
//     }
// }
// list
// let fruitList = ['apple','banana','mango','grapes','orange']
// console.log(fruitList);
// console.log(fruitList[3])
// console.log(fruitList.indexOf('apple'))
// console.log(fruitList.length) //Gets or sets the length of the array. This is a number one higher than the highest index in the array.
// console.log(fruitList.pop()) //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(fruitList)
// console.log(fruitList.push('pineapple')) //Appends new elements to the end of an array, and returns the new length of the array.
// console.log(fruitList)
// console.log(fruitList.sort())
// // tuple
// // define tuple
// let mixList: [string , boolean , number ];
// // initialize tuple
// mixList = ['shoaib' , false , 100]
// console.log(mixList[1])
// console.log(mixList.indexOf(100))
// console.log(mixList[2])
// let secExmp : [number , number ] = [110 , 100]
// console.log(secExmp)
// object
// let car : {
//     type : string,
//     model : string,
//     year : number
// }
// =
// {
//     type: "Toyota",
//     model : "corolla",
//     year: 2018
// }
// console.log(car)
// console.log(car.model ,'\n',car.type ,'\n',car.year)
//type inference
// car.type = 2 // Error Type 'number' is not assignable to type 'string'
// let car2 : { //Error
//     type : string,
//     model : string,
//     year : number,
//     mileage : number,
// }
// =
// {
//     type: "Toyota",
//     model : "corolla",
//     year : 2017
//     //Property 'mileage' is missing in type '{ type: string; model: string; year: number; }' but required in type '{ type: string; model: string; year: number; mileage: number; }'
// }
// car2.mileage = 2000 ;
// console.log(car2)
// console.log(car2.model ,'\n',car2.type ,'\n',car2.year ,'\n',car2.mileage)
// let car3 : { //Error
//     type : string,
//     model : string,
//     year : number,
//     mileage? : number, //it is optional to define
// }
// =
// {
//     type: "Toyota",
//     model : "corolla",
//     year : 2017
//Property 'mileage' is missing in type '{ type: string; model: string; year: number; }' but required in type '{ type: string; model: string; year: number; mileage: number; }'
// }
// car3.mileage = 2000 ;
// console.log(car3)
// console.log(car3.model ,'\n',car3.type ,'\n',car3.year ,'\n',car3.mileage)
// car3.mileage=30000
// console.log(car3)
//index signatures
// let age : {[index : string]:number}={}
// age.shoaib = 35;
// age.hamza ='thirty five' //no error Type 'string' is not assignable to type 'number'
// console.log(age)
// age.bilal = 24;
// console.log(age)
// variable
// When creating a variable, there are two main ways TypeScript assigns a type:
// 1.Explicit
// 2.Implicit
// Expilicit
// let firstName : string = 'shoaib' //let firstName: string (defined manually)
// console.log(firstName)
// console.log(typeof(firstName))
// firstName = 35 //Error Type 'number' is not assignable to type 'string'.
//Impilicit
// let secondName = 'ubaid' //let secondName: string (inference)
// console.log(secondName)
// console.log(typeof(secondName))
// secondName = 45 //Error Type 'number' is not assignable to type 'string'.
// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// let thirdName : any = 35
// console.log(thirdName,typeof(thirdName))
// thirdName = 'shoaib'
// console.log(Math.round(thirdName)) //Result is NaN
// console.log(thirdName,typeof(thirdName))
// Type: unknown
// unknown is a similar, but safer alternative to any.
// let thirdName1 : unknown = 37
// console.log(thirdName1,typeof(thirdName1))
// console.log(Math.round(thirdName1)) //Error Argument of type 'unknown' is not assignable to parameter of type 'number'
// thirdName1 = 'shoaib'
// // console.log(Math.round(thirdName1)) //Error Argument of type 'unknown' is not assignable to parameter of type 'number'
// console.log(thirdName1,typeof(thirdName1))
// Type: never
// never effectively throws an error whenever it is defined.
// let isCheck : never = true // Error Type 'boolean' is not assignable to type 'never'
// let myName : never ;
// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
// let a:null = null;
// let b:undefined = undefined;
// console.log(a,'\n',b)
