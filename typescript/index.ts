const person: {name: string, age: number, gender?: string} = {
    name: "zohaib",
    age: 23,
}

function createUserObject(): {name: string, age: number, gender: string, city?: string} {
    return {
        name: "zohaib",
        age: 23,
        gender: "male"
    }
}