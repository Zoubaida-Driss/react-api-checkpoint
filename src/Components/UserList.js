import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
    console.log(users)
  return (
  
    <div className='back'>
     {users&&React.Children.toArray(users.map(el=><UserCard user={el}></UserCard>))}
    </div>
  )
}

export default UserList