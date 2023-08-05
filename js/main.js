// // Differnce between let and const keyword?
// // var and let create variables that can be reassigned another value. const creates "constant" variables that cannot be reassigned another value.

// Which methods are used to avoid Shallow copy?

// spread operator
// object assign
// json stringify json parse

// Difference between map and foreach
// The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of array, whereas the forEach() method is used to loop through the elements of an array

//  Write the states of promises.

//  fulfilled
//  rejected
//  pending

//  Difference between promise chaining and promise all.
//  Executes one by one (synchronous). Result of one execution can be passed to the next step. Execution time to fulfill all the promise is comparatively high. Chaining after an error is possible.

//   What is the final value of obj.
// const obj = {foo:1}
// obj.bar = 2;
// console.log(obj)

// ans:{foo:1,bar:2}

//  const speed = "quick";
// console.log(`The ${speed} brown fox jumps over the lazy dog`)

// ans:the speed brown fox jumps over the lazy dog

//  var obj1 = {
//     id: 1,
//     company: "GFG"
// };
// var obj2 = obj1;
// obj2.id = 2;
// console.log(obj1.id);
// console.log(obj2.id);

// ans:2
// ans:2


// Input : [3,4,5,6]
//     Output : [3,5,7,9]
// How to achieve this output?

// using map functio.....

// let output=input.map(value,index){
// 	c= value+index
// 	return c
// }

// console.log(output)

// Which method is used to check all values and return boolean value?

// some every 

// const price = [35,66,234,56,88,90,22]
// How to find minimum value?

//  const ans = price.sort((a, b) => a - b);
//   const minimumvalue = sortedArray[0];


// ES6 Published in 2015  


// var employee =[{
// name : "Karuppasamy",
// age : 24,
// Salary : 25000,
// level : "junior"
// },
// {
// name : "Samy",
// age : 21,
// Salary : 20000,
// level : "junior"
// },{
// name : "Kaviya",
// age : 22,
// Salary : 18000,
// level : "junior"
// },{
// name : "Naresh",
// age : 45,
// Salary : 100000,
// level : "senior"
// },{
// name : "Prem",
// age : 24,
// Salary : 50000,
// level : "senior"
// }];

// Output : ["Naresh","Prem"];


// let output=employee.map(employee)=>{

// 	return employee.level=="senior"?{...employee,name}:""


// } 

// const rem = 0
// rem++;
// rem++;
// console.log(rem);

// 0,1,3,3


//  function a(){
// console.log("Hi")

// }

// function b(){
// console.log("Fabevy")
// }

// a(b)

// output=hi


// Solve the armstrong logic in async/await

// let a=153 
// let count=0
// let sum=0
// let c =a
// let d=c

// function sathesh(){
// 	return newPromise(p,q)=>{
// 		while(a!=0){
// 			b=a%10
// 			a=(a-b)/10
// 			count++
// 		}
// 		p(count)
// 	}
// }

// function armstrong(count){
// 	return newPromise(r,s)=>{
// 		while(c!=0){
// 			b=c%10
// 			a=(c-b)/10
// 			sum=sum+(b**count)
// 		}
// 		r(sum)
// 	}
// }

// function check(){
// 	return newPromise(t,u)=>{
// 		if(d==sum){
// 			t("success")
// 		}
// 		else{
// 			u("not armstrong")
// 		}
// 	}
// }

// async function hi(){
// 	try{
// 		let l=await sathesh()
// 		let m=await armstrong(l)
// 		let n=await check(m)
// 		console.log("success")

// 	}

// 	catch{
// 		console.log("err")
// 	}
// }
// hi()




// let obj1 = {
// "name" : "Monisha"
// }
// let obj = Object.assign({},obj1);
// obj1.position = "QAE"
// console.log(obj,obj1);


// { name: 'Monisha' } { name: 'Monisha', position: 'QAE' }



// let person = {name: "Linda"}
// const members = [person];
// person = null;
// console.log(person)
// null


//  Which methods are used to solve async function into sync?

//  promise
//  promise Chaining
//  promise all
//  async await