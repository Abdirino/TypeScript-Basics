let variable = "hello";
//you cannot change variable to any other type other than string

let ageWithType: number;
ageWithType = 16; //shows error with other types

let testString: string;
testString = "me";

let testBoolean: boolean;
testBoolean = true;

//Array
let names = ["john", "mary"]; //only accepts string type
//you can't push any other type into names array other than string type

let numArray: number[] = [1, 2, 3, 5];

let testArrayStringNumber: (string | number)[]; // union type, accepts strings and number types
testArrayStringNumber = [1, 2, "love"];

//object
let user = {
  //typescript understands that objects have multiple types
  username: "elena",
  age: 34,
  IsAdmin: true,
};
//object with types
let userObj: {
  username: string;
  age: number;
  IsAdmin: boolean;
  phone?: number;
}; //to call userObj you have to include every property except the ones with condition(?)

let testAny; //this can be any type by default

let testAnyArray: any[]; // You can give any value type in this array

//functions
let sayHi = () => {
  //This will always considered to be a function in TypeScript
  console.log("Hi");
};
let stringFunction = (): string => {
  //only returns string type
  return "Hello";
};
let multiple = (num: number): number => {
  return num * 2;
};
let sum = (num1: number, num2: number, anotherNum?: number) => {
  return num1 + num2;
};

//TYPE ALIASES
type userType = {
  username: string;
  age: number;
  phone: number;
};

let Func = (user: userType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;
let write: myFunc = (num, string) => {
  console.log(3, "noob");
};

//INTERFACES
interface IUser {
    username: string;
    email: string;
}
interface IEmployee extends IUser {
    employeeId: number;
}

//GENERICS
interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    des: string;
    extra: IAuthor[] | ICategory[]
}

interface IPostBetter<T> {
    id: number;
    title: string;
    des: string;
    extra: T[]
}

const testMe : IPostBetter<string> = {
    id: 1,
    title: "post Title",
    des: "postDescription",
    extra: ["str1", "str2", "str3"]
}