console.log("Hello, world!");
import { v4 as uuidv4 } from "uuid";
uuidv4();
// boolean
let isDone = false; // let isDone: boolean = false
isDone = true;
// number
let decimal = 6;
// string
let color = "blue";
// array
let list = [1, 2, 3];
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let ChoosenColor = Color.Green;
console.log(ChoosenColor);
// any
let notSure;
notSure = "Blue";
notSure = false;
notSure = 4;
notSure = [1, 2, 3];
notSure = null;
// tuple
let x;
x = ["hello", 10];
// unknown
let notSure2; // unknown is better than any!
notSure2 = "Blue";
notSure2 = false;
notSure2 = 4;
notSure2 = [1, 2, 3];
notSure2 = null;
// void
function warnUser() {
    console.log("This is my warning message, be careful!");
}
warnUser();
// null and undefined
let u = undefined;
let n = null;
create({ prop: 0 });
create(null);
//Partial type Data
const userUpdate = {
    email: "new@example.com",
    // Es braucht nicht alle Felder
};
