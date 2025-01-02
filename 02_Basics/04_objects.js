// const instauser = new Object()
const instauser = {}

instauser.id = "123@ABC"
instauser.name = "Rudra"
instauser.age = 19
instauser.IsLoggedIn = true

//console.log(instauser);

const regularuser = {
    email: "rudra@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rudra",
            Middlename: "Prasanna",
            Lastname: "Mishra"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
]

//console.log(instauser);

//console.log(Object.keys(instauser));
//console.log(Object.values(instauser));
//console.log(Object.entries(instauser));

//console.log(instauser.hasOwnProperty("IsLoggedIn"));



const course = {
    coursename: "Javascript",
    price: 1000,
    CourseInstructor: "name"
}

// course.courseInstructor

const {CourseInstructor: Teacher} = course
//console.log(CourseInstructor);
console.log(Teacher);

/* {
    name: "Rudra",
    coursename: "Javascript",
    "price": "free"
}
*/

[
    {}
    {}
    {}
]