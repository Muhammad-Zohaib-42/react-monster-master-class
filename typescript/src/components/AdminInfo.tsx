import { type UserInfo } from "./UserInfo"

type AdminInfo = UserInfo & {
    role: string
}

const AdminInfo = ({username, email, password, role}: AdminInfo) => {
  return (
    <div>
        <h1>AdminInfo here</h1>
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{password}</li>
            <li>{role}</li>
        </ul>
    </div>
  )
}

export default AdminInfo