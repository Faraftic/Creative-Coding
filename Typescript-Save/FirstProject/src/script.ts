console.log("Hello, world!");
import { v4 as uuidv4 } from "uuid";

uuidv4();
type UserType = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  productId: string;
};

// boolean
let isDone = false; // let isDone: boolean = false
isDone = true;

// number
let decimal: number = 6;

// string
let color: string = "blue";

// array
let list: number[] = [1, 2, 3];

// never
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("Something failed");
}
function infiniteLoop(): never {
  while (true) {}
}

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let ChoosenColor: Color = Color.Green;
console.log(ChoosenColor);

// any

let notSure: any;
notSure = "Blue";
notSure = false;
notSure = 4;
notSure = [1, 2, 3];
notSure = null;

// tuple
let x: [string, number];
x = ["hello", 10];

// unknown
let notSure2: unknown; // unknown is better than any!
notSure2 = "Blue";
notSure2 = false;
notSure2 = 4;
notSure2 = [1, 2, 3];
notSure2 = null;

// void
function warnUser(): void {
  console.log("This is my warning message, be careful!");
}
warnUser();

// null and undefined
let u: undefined = undefined;
let n: null = null;

// object
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

//Utility types
type AdminType = Omit<UserType, "productId">;

type UserName = Pick<UserType, "firstName" | "lastName">;

type UserRoles = "admin" | "editor" | "viewer" | "banned";

type RoleMap = Record<UserRoles, AdminType>;

type AllowedRules = Exclude<UserRoles, "banned">;

type PartialUser = Partial<UserType>;

type Caps = Uppercase<"hello">; // HELLO
type Lower = Lowercase<"HELLO">; // hello
type CapitalizeName = Capitalize<"john">; // John
type LowerStart = Uncapitalize<"John">; // john

//Partial type Data
const userUpdate: PartialUser = {
  email: "new@example.com",
  // Es braucht nicht alle Felder
};

//Union types
let value: string | number;

value = "Hallo";
value = 42;

// Intersection types
type A = { name: string };
type B = { age: number };

let person: A & B = {
  name: "Anna",
  age: 30,
};

//Type Indexing
type Person = { name: string; age: number };

type NameType = Person["name"];
