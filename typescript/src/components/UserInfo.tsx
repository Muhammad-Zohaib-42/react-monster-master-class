export type UserInfo = {
    username: string,
    email: string,
    password: string
}

const UserInfo = ({username, email, password}: UserInfo) => {
  return (
    <div>
        <h1>UserInfo here</h1>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{password}</li>
        </ul>
    </div>
  )
}

export default UserInfo