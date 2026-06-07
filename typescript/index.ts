type Person = {
    name: string, 
    age: number,
    gender?: string
}

const person: Person = {
    name: "zohaib",
    age: 23,
}

type User = {name: string, age: number, gender: string, city?: string}

function createUserObject(): User {
    return {
        name: "zohaib",
        age: 23,
        gender: "male"
    }
}