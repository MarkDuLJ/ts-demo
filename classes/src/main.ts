class Coder{
    constructor(
        public name: string,
        private age:number,
        protected lang: string = "Typescript"
    ){
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
console.log(Tim.getAge())

interface Musician{
    name:string,
    instrument: string,
    play(action: string) : string
}

class Guitarist implements Musician{
    name: string;
    instrument: string;

    constructor(name:string, instrument:string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Jessie = new Guitarist("Jessie","guitar")
console.log(
    Jessie.play("beep")
);


class Peeps{
    static count: number = 0

    static getCount():number{
        return Peeps.count
    }

    public id:number

    constructor (public name : string){
        this.name= name
        this.id = ++ Peeps.count
    }
}

const John = new Peeps("John")
const John1 = new Peeps("John")
const John2 = new Peeps("John")

console.log(Peeps.count);

class Bands{
    private dataState:string[]

    constructor(){
        this.dataState = []
    }

    public get data() : string[] {
        return this.dataState
    }

    public set data(v : string[]) {
        if(Array.isArray(v) && v.every(el=>typeof el === "string")){
            this.dataState = v
            return
        }else{
            throw new Error("para is not an array of strings")
        }
    }   
}

const myBands = new Bands()
myBands.data =["Neil" ,"Led Zep"]
myBands.data =[...myBands.data, "Vivian"]
console.log(myBands.data);

// index signatures

// interface TransactionObj{
//     Pizza: number,
//     Books: number,
//     Job: number
// }
interface TransactionObj{
   [index: string] : number
}

const todaysTransactions : TransactionObj ={
    Pizza: 10,
    Books:4,
    Job:6
}

let prop:string="Pizza"
console.log(todaysTransactions[prop]);
console.log(todaysTransactions["Peter"]);

interface Student{
    [key: string] : string | number | number[] | undefined
    name:string,
    GPA: number,
    classes?: number[]
}

const student:Student ={
     GPA:7.8,
     name:"tim",
     classes:[102,423]
}

for(const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`); 
}

Object.keys(student).map(key=>{
    console.log(student[key]);
    
})

// Generics
const stringEcho = (arg: string):string =>arg
const echo =<T> (arg: T): T=>arg

console.log(echo(123));

const isObj =<T>(arg:T): boolean =>arg !== null && typeof arg === "object" && ! Array.isArray(arg)

console.log(isObj({a:1, b:8}));
console.log(isObj([1,2,3]));
console.log(isObj(null));

const isTrue =<T>(arg:T):{arg:T, is:boolean} =>{
    if(Array.isArray(arg) && !arg.length){
        return {arg,is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg,is:false}
    }
    return {arg,is:!!arg}
}

console.log(isTrue(null));

interface BooleanCheck<T>{
    value: T,
    is: boolean
}

const checkBooleanValue = <T> (arg:T): BooleanCheck<T> =>{
    if(Array.isArray(arg) && !arg.length){
        return {value:arg,is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value:arg,is:false}
    }
    return {value:arg,is:!!arg}
}
console.log(checkBooleanValue(false))
console.log(checkBooleanValue(0))
console.log(checkBooleanValue(true))
console.log(checkBooleanValue(1))
console.log(checkBooleanValue('Dave'))
console.log(checkBooleanValue(''))
console.log(checkBooleanValue(null))
console.log(checkBooleanValue(undefined))
console.log(checkBooleanValue({})) // modified
console.log(checkBooleanValue({ name: 'Dave' }))
console.log(checkBooleanValue([])) // modified
console.log(checkBooleanValue([1, 2, 3]))
console.log(checkBooleanValue(NaN))
console.log(checkBooleanValue(-0))

interface HasID{
    id:number
}

const processUser = <T extends HasID>(user: T):T => user

console.log(processUser({id:1, name:"Tim"}));


const getUsersProperty =<T extends HasID, K extends keyof T>(users: T[], key:K): T[K][]=>{
    return users.map(user=>user[key])
}


// Utility Types
// Partial

interface Assignment{
    studentId:string,
    title:string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>):Assignment =>{
    return {...assign, ...propsToUpdate}
}
const assign:Assignment ={
    studentId:"tim123",
    title:"Final exam",
    grade:68
}

console.log(updateAssignment(assign,{grade:97}));

// required and readonly
const recordAssignment =(assign:Required<Assignment>):Assignment =>{
    return assign
}
const assignVerified: Readonly<Assignment> ={...assign,verified:true}
console.log(assignVerified);

// Record
const hexColorMap: Record<string,string> = {
    red:"FF0000",
    green:"00FF00",
    blue:"0000FF",
}

type Students = "Sarah" | "Tim"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students,LetterGrades> ={
    Sarah:"B",
    Tim:"A"
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">
type AssignPreview = Omit<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId:"k111",
    grade:99
}

// Exclude and Extract
type adjustGrade = Exclude<LetterGrades, "U">

// Nonnullable

// ReturnType

// Awaited - helps us with ReturnType of a promise

interface User{
    id: number,
    name:string,
    username:string,
    email:string,
}

const fetchUsers =async (): Promise<User[]> => {
    const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
        ).then(res=> {
            return res.json()
        }).catch(err=>{
            if(err instanceof Error) console.log(err.message);
            
        })
    return data
    
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users=>console.log(users))