const name = "Rudra"
const repoCount = 2

// console.log(name + repoCount + "value" ); ##DO NOT USE THIS

console.log(`Hello, my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('rudra-hc-com')

/*
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length); // tells length of a word
console.log(gameName.toUpperCase()); // Converts into Upper case
*/
console.log(gameName.charAt(3)); // tells the character at a certain place
console.log(gameName.indexOf('a')); // tells index no of a certain character

const newstring = gameName.substring(0,3)
console.log(newstring);

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring);

const newstringOne = "    rudra    "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://rudra.com/rudra%20mishra"
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('prasanna'));
console.log(url.split('-'));

