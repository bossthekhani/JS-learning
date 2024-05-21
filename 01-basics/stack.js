// Stack (Primitive), Heap (Non Primitive)
let myName = "umairdotcom"

let anothername = myName
anothername = "chaiaurme"

console.log(anothername);
console.log(myName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userOne
    usertwo.email = "umair@google.com"

    console.log(userOne.email);
    console.log(usertwo.email);
    console.log(userOne);
                                  //***********The END *********/
