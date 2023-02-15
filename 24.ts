// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// will print true
console.log('"Ahsan" == "Ahsan"');
console.log("Ahsan" == "Ahsan");

// will print false
console.log('"Ahsan" != "Ahsan"');
console.log("Ahsan" != "Ahsan");


// • Tests using the lower case function
// will print false
console.log('"WALI" == "WALI".toLocaleLowerCase()');
console.log("WALI" == "WALI".toLocaleLowerCase());
// will print true
console.log('"wali" == "WALI".toLocaleLowerCase()');
console.log('wali' == "WALI".toLocaleLowerCase());


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// true
console.log('1==1');
console.log(1==1);
// true
console.log('10>1');
console.log(10>1);
// false
console.log('10>11');
console.log(10>11);
// true
console.log('10<11');
console.log(10<11);
// true
console.log('10<=11');
console.log(10<=11);


// • Tests using "and" and "or" operators
// true
console.log('"ahsan" == "ahsan" || 123 == 123');
console.log("ahsan" == "ahsan" || 123 == 123);

// false
console.log('"ahsan" == "ahsan".toLocaleUpperCase() && 123 == 123');
console.log("ahsan" == "ahsan".toLocaleUpperCase() && 123 == 123);


// • Test whether an item is in a array
//false
console.log("'ahsan' in ['wali','ali',123,'kamran','junaid']");
console.log('ahsan' in ['wali','ali',123,'kamran','junaid']);

// • Test whether an item is not in a array
// true
console.log("!('ahsan' in ['wali','ali',123,'kamran','junaid'])");
console.log(!('ahsan' in ['wali','ali',123,'kamran','junaid']));

