"use strict";
class Coder {
    constructor(name, age) {
        this.lang = "Typescript";
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
