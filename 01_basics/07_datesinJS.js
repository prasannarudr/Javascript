let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

//let mycreateddate = new Date(2024, 11, 24)
//let mycreateddate = new Date(2024, 11, 24, 17, 43) 
let mycreateddate = new Date("2024-01-12") // #International 
//let mycreateddate = new Date("01-11-2024") #Indian

//Jan- 0, Dec- 11
// YR MONTH DATE HOUR MIN SEC

// console.log(mycreateddate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(`Today the date and time is ${newDate.toLocaleString()}`);

