// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
var user1 = { name: 'John', phone: '1212', age: 12, male: false };
// comparing name 
console.log("is name John ?", user1.name == 'John'); // should print true
console.log("is name john ?", user1.name == 'john'); // should print false as j is small
console.log("is age greater then 10 ?", user1.age > 10); // should print true 
console.log("is age less then 10 ?", user1.age < 10); // should print false 
// i was not able to implement this as ts done allow me to compare string to number
// console.log("is age greater then 10 ?", user1.age > '10'); // should print false as 10 is not number and === also checks data type 
console.log("is phone 1212 correct ?", user1.phone == '1212'); // should print true 
console.log("is phone 121212 correct ?", user1.phone == '121212'); // should print false 
// i was not able to implement this as ts done allow me to compare string to number
// console.log("is phone correct ?", user1.phone === 1212); // should print false as 1212 is not string and === also checks data type 
console.log("is gender male ?", user1.male == true); // should print false 
console.log("is gender male ?", user1.male != true); // should print true 
