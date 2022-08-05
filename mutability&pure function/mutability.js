let object1 = {
    name: "harita", 
    age: "22",
    city: "bhilwara"
};
let object2 = object1;

object1.name = "bittu";

let object3 = {
    name: "poonam",
    age: "20",
    city: "jaipur"
};

console.log(object1);
console.log(object1===object2);
console.log(object1===object3);