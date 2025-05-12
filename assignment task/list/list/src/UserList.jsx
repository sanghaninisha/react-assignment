import React from 'react'

const UserList = () => {
    const user = [
        {id:1, name:"nisha"},
        {id:2, name:"prasanta"},
        {id:3, name:"shree"},
        {id:4, name:"dixita"},
        {id:5, name:"gopi"},
    ]
  return (
    <div>
        <h2>User List</h2>
      <ul>
        {
            user.map((i,index)=>(
                <li>{i.name}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UserList
