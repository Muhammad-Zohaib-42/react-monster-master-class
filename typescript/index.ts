type User = {
    username: string
    email: string
}

type Admin = {
    dashboard: boolean
}

type NewUser = User & Admin

const newUser: NewUser = {
    username: "zohaib",
    email: "zohaib@gmail.com",
    dashboard: true
}

