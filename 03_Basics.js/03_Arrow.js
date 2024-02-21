const user = {
    username: "Abhijeet",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Vinni"
// user.welcomeMessage()

// console.log(this);

// function fun(){
//     let username = "Abhijeet"
//     console.log(this.username);
// }

// fun()

// const fun = function () {
//     let username = "Abhijeet"
//     console.log(this.username);
// }

const fun =  () => {
    let username = "Abhijeet"
    console.log(this);
}


// fun()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Abhijeet"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()