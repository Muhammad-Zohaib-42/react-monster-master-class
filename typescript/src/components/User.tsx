import type { FC } from "react"

interface UserShape {
  username: string,
  email: string
}

const User: FC<UserShape> = ({username, email}) => {
  return (
    <div>
        <p>username: {username}</p>
        <p>email: {email}</p>
    </div>
  )
}

export default User