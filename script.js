
//1
let nums = [1, 2, 5, 6, 22, 44, 66, 3, 4, 17, 22, 444];
let sum = 0;
nums.forEach(num => { sum += num;});
console.log(sum);
//2
let arr = ["hello", 1234, "", false, NaN, 123, true, " ", null, "29.01.1992"];
let string = [];
let number = [];
let boolean = [];
let object = [];
//
arr.filter(human => {
    if (typeof human === "string") {
        string.push(human);
    } else if (typeof human === "number" ) {
        number.push(human);
    } else if (typeof human === "boolean") {
        boolean.push(human);
    } else {
        object.push(human);
    }
})
console.log("Strings:", string);
console.log("Numbers:", number);
console.log("Booleans:", boolean);
console.log("Objects:", object)
//
console.log(typeof NaN);
