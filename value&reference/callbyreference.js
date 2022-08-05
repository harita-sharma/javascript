//call by reference

let a = {
    name: "harita",
    password: "12345",
};

let b = a;

b.password = "2199";

console.log(a);
console.log(b);