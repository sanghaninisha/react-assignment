import React from 'react'

const FruitList = () => {
    const fruit = ["banana", "cherry", "apple", "lichchi", "mango", "watermelon"]
  return (
    <div>
      <h2>Fruit list</h2>
      <ul>
        {
            fruit.map((i,index)=>(
                <li>{i}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default FruitList
