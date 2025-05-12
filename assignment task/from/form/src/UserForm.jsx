import React, { useState } from 'react'

const UserForm = () => {
  const [data,setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [submit,setSubmit] = useState([]) 

  const handleChange = (e) =>{
    const {name,value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const saveData = (e) =>{
    e.preventDefault()
      setSubmit([
        ...submit,
        data
      ])

      setData({
        name : "",
        email :"",
        password :""
      })
  }
  return (
    <div>
      <h2>User Registration Form</h2>
     <form action="#" method='post' onSubmit={saveData}>
         <label htmlFor="">Name : </label>
         <input type="text" name="name" id="" value={data.name} onChange={handleChange} /> <br /> <br />
         <label htmlFor="">Email : </label>
         <input type="text" name="email" id=""  value={data.email} onChange={handleChange} /> <br /> <br />
         <label htmlFor="">PassWord : </label>
         <input type="password" name="password" id=""  value={data.password} onChange={handleChange} password="hide"/> <br /> <br />
        <button type='submit'>Submit</button>
     </form><br /> <br />

     <table border={'2'} cellPadding={'3'} cellSpacing={'5'}>
      <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      </tbody>
       <tbody>
      {
        submit.map((i,index)=>{
          return(
            <tr>
              <td>{index+1}</td>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.password}</td>
            </tr>
          )
        })
      }
     </tbody>
     </table>
    
    </div>
  )
}

export default UserForm
