import React from 'react'

export default function buylist(props) {
  return (
    <div style={{display:'inline-block' ,margin:'20px',backgroundColor:'#0784c7',borderRadius:'20px',width:'200px'}}>
        <h2>{props.itemName}</h2>
        <h2 style={{display:'inline-block'}}>{props.itemPrice}</h2>
        <h2 style={{display:'inline-block'}}>*{props.times}</h2>


    </div>
  )
}
