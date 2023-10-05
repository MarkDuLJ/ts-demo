"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Coder {
    constructor(name, age, lang = "Typescript") {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
    }
    /**
     * getAge
     */
    getAge() {
        return this.age;
    }
}
const Dave = new Coder("Dave", 33);
console.log(Dave.name);
class WebCoder extends Coder {
    constructor(computer, name, age) {
        super(name, age);
        this.computer = computer;
        this.computer = computer;
    }
    /**
     * getLang
     */
    getLang() {
        return this.lang;
    }
}
const Tim = new WebCoder("Mac", "Tim", 17);
console.log(Tim.getLang());
console.log(Tim.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Jessie = new Guitarist("Jessie", "guitar");
console.log(Jessie.play("beep"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const John1 = new Peeps("John");
const John2 = new Peeps("John");
console.log(Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(v) {
        if (Array.isArray(v) && v.every(el => typeof el === "string")) {
            this.dataState = v;
            return;
        }
        else {
            throw new Error("para is not an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["Neil", "Led Zep"];
myBands.data = [...myBands.data, "Vivian"];
console.log(myBands.data);
const todaysTransactions = {
    Pizza: 10,
    Books: 4,
    Job: 6
};
let prop = "Pizza";
console.log(todaysTransactions[prop]);
console.log(todaysTransactions["Peter"]);
const student = {
    GPA: 7.8,
    name: "tim",
    classes: [102, 423]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
// Generics
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
console.log(echo(123));
const isObj = (arg) => arg !== null && typeof arg === "object" && !Array.isArray(arg);
console.log(isObj({ a: 1, b: 8 }));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(null));
const checkBooleanValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
console.log(checkBooleanValue(false));
console.log(checkBooleanValue(0));
console.log(checkBooleanValue(true));
console.log(checkBooleanValue(1));
console.log(checkBooleanValue('Dave'));
console.log(checkBooleanValue(''));
console.log(checkBooleanValue(null));
console.log(checkBooleanValue(undefined));
console.log(checkBooleanValue({})); // modified
console.log(checkBooleanValue({ name: 'Dave' }));
console.log(checkBooleanValue([])); // modified
console.log(checkBooleanValue([1, 2, 3]));
console.log(checkBooleanValue(NaN));
console.log(checkBooleanValue(-0));
const processUser = (user) => user;
console.log(processUser({ id: 1, name: "Tim" }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign = {
    studentId: "tim123",
    title: "Final exam",
    grade: 68
};
console.log(updateAssignment(assign, { grade: 97 }));
// required and readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assign), { verified: true });
console.log(assignVerified);
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sarah: "B",
    Tim: "A"
};
const score = {
    studentId: "k111",
    grade: 99
};
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
