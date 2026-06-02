import React from 'react'

const UserList = () => {
  const users = [
    {
        id: 1,
        name: "zohaib",
        age: 23
    },
    {
        id: 2,
        name: "shoaib",
        age: 25
    },
    {
        id: 3,
        name: "shahid",
        age: 24
    }
  ]

  return (
    <div>
        {
            users.map(user => (<ul key={user.id}>
                <li>{user.name}</li>
                <li>{user.age}</li>
            </ul>))
        }
    </div>
  )
}

export default UserList