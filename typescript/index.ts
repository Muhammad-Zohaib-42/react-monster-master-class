type Obj = {
    readonly name: string,
    age?: number
}

const obj: Obj = {
    name: "zohaib",
}

obj.name = "shoaib"

console.log(obj)