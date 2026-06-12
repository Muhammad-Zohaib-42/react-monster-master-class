import { useState } from "react"

interface ProfileDataShape {
    id: number,
    username: string,
    email: string,
    role: string
}

const UserProfile = () => {
  const [profileData, setProfileData] = useState<ProfileDataShape>({
    id: 1,
    username: 'zohaib',
    email: 'zohaib@gmail.com',
    role: "user"
  })

  return (
    <div>
        <h1>User Profile</h1>
        <ul>
            {
                Object.keys(profileData).map(() => <li>{profileData.username}</li>)
            }
        </ul>
    </div>
  )
}

export default UserProfile