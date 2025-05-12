import React, { useState } from 'react'

const ClickButton = () => {
    const [button, setButton] = useState("No Clicked")
  return (
    <div>
      <h3>{button}</h3>
      <button onClick={(()=>setButton("Clicked"))}>Change</button>
    </div>
  )
}

export default ClickButton
