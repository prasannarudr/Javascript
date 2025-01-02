// singleton

// OBJECT LITERALS

const mysym = Symbol("key1")

const Jsuser = {
    name: "Rudra",
    "full name": "Rudra Prasanna Mishra",
    [mysym]: "mykey1",
    age: 19,
    location: "Delhi",
    email: "prasannarudra2005@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);

Jsuser.email = "prasannarudra@gmail.com"
console.log(Jsuser["email"]);
//Object.freeze(Jsuser)
Jsuser.email = "rudra@gmail.com"
console.log(Jsuser["email"]);

Jsuser.greeting = function(){
    console.log("Hello JS User");
}
Jsuser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());

console.log(Jsuser);