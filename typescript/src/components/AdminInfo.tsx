import { type UserInfo } from "../types"

const AdminInfo = ({admin}: {admin: UserInfo}) => {
  return (
    <div>
      <p>id: {admin.id}</p>
      <p>username: {admin.username}</p>
      <p>email: {admin.email}</p>
      <p>role: {admin.role}</p>
    </div>
  )
}

export default AdminInfo