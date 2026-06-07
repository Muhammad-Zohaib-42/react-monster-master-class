type Person = {
    name: string,
    age: number
}

type Employee = {
    id: number,
    title: string
}

type PersonAndEmployee = Person & Employee

const user: PersonAndEmployee = {
    name: "zohaib",
    age: 23,
    id: 2,
    title: "employee"
}