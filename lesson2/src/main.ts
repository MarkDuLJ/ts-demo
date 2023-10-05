class Coder{
    public name: string
    private age:number
    protected lang: string = "Typescript"

    constructor(name: string, age: number){
        this.name=name
        this.age=age
    }

    /**
     * getAge
     */
    public getAge() {
        return this.age
    }
}

const Dave = new Coder("Dave", 33)
console.log(Dave.name);


class WebCoder extends Coder{
    constructor (
        public computer: string,
        name: string,
        age: number
    ){
        super(name, age)
        this.computer = computer
    }

    /**
     * getLang
     */
    public getLang() {
        return this.lang
    }
}

const Tim = new WebCoder("Mac", "Tim",17)
console.log(Tim.getLang())