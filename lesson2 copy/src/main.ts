let username = "Mark"
// console.log(username);

let life: number
let isLoading:boolean

life=33
isLoading = true

// console.log(life/isLoading);

let strArr = ["one", "two", "three"]

let mixedData= ["Eva", 1999, true]

let myObj:object
myObj=[]
console.log(typeof myObj);

type mathFuc =(a:number,b:number)=>number

let multiply:mathFuc = function (c,d) {
    return c+d
}

interface MathFuc{
    (a:number,b:number):number
}

let time:MathFuc = (a,b)=>a*b

const createError=(errMsg:string) : never=>{
    throw new Error(errMsg)
}

// every situation have to return string by following the design
const numOrStr = (val: number|string):string=>{
    if(typeof val === "number") return "number"
    if(typeof val === "string") return "string"
    return createError("this should not happen")
}


type One = string
type Two =number | string
type Three = "hello"

let a:One = "hello"
let b = a as Two
let c= a as Three

let e= <string | number> "world"

const addOrConcat = (a:number,b:number, c: "add" | "concat"):number | string =>{
    if(c === "add") return a+b
    return "" + a + b
}

let newVal: string = addOrConcat(2,2,"add") as string
let myVal: number = addOrConcat(2,2,"concat") as number
console.log(myVal);

// double assertion(casting)
10 as unknown as string

// DOM
const img = document.getElementById("img") as HTMLImageElement
const newImg = document.getElementById("img") as HTMLImageElement
const img1 =<HTMLImageElement> document.getElementById("img")





