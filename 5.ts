// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.



const famous_person:string = "Tony Robbins"
const Quote:string = `If you do what you’ve always done, you’ll get what you’ve always gotten`

// i have concatinated the string using + operator
const message:string = famous_person + ` once said ` + `"${Quote}"`

console.log(message);


