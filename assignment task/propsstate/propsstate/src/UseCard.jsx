import React from 'react'
import './Card.css'
const UseCard = ({name,age,location}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>Age : {age}</h2>
      <h2>Location : {location}</h2>
    </div>
  )
}

export default UseCard
