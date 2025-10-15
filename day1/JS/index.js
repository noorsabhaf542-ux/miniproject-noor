// variables constants
// a = 5
let a = 1
// a  = "Aaryan"

let b = true
// console.log(a, b)
/* 
dsfds
dfsadfsd
*/

// Mathematical operators
console.log(a + 1)
console.log(a - 1)
console.log(a * a)
console.log(a / 1)
console.log(a % 2)
console.log(a++, ++a)
console.log(a--, --a)

// conditional statments
if(a > 2) {
    // console.log("a =", a * 2, "b is", b)
    console.log(`a = ${a * 2} and b is ${b}`) // string interpolation
} else if(a == 2) {
    console.log("a is 2")
} else {
    console.log(`a = ${a * 4} and b is ${!b}`)
}

function hello(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b)
    console.log(b++, ++b)
    console.log(b--, --b)
}

function table(num) {
    // for (let i = 1; i <= 10; i++)
    //     console.log(`${num} * ${i} = ${num * i}`)
    // let i = 1
    // while (true) {
    //     if(i > 10) break; // termination statment
    //     console.log(`${num} * ${i} = ${num * i}`)
    //     i++;
    // }
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => {
        console.log(`${num} * ${i} = ${num * i}`)
    });
}
table(5)
// hello(4, 5)

function btnclicked() { 
    const username = document.getElementById("uname").value.toString();
    const pass = document.getElementById("pass").value.toString();

    if(username && String(username).length > 2 && pass && String(pass).length > 5) {
        alert("Login success")
    } else {
        alert("Username/Password is incorrect")
    }
}