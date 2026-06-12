import { type Info } from "../types"

const UserInfo = ({user}: {user: Info}) => {
  return (
    <div>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
    </div>
  )
}

export default UserInfo