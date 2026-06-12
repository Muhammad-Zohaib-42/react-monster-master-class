type Info = {
    id: number,
    username: string,
    email: string
}

type UserInfo = Info & {
    role: string
}

export {type Info, type UserInfo}