import React from 'react'
import Productlist from './Productlist'

export default function Products(props) {
  return (
    <div style={{marginLeft:'30px',marginRight:'30px',alignContent:'baseline',display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr 1fr',gridTemplateRows:'100px auto'}}>
        <h1 style={{gridRow:'1',gridColumn:'1/6'}}>products:</h1>

        {props.items.map((val,ind)=>{
            return <Productlist additem={props.buyitem} items={val} index={ind} key={ind}/>
        })}

    </div>
  )
}
