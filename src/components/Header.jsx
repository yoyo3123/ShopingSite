import React from 'react'
import home from '../home.png'
import cart from '../shopping-cart.png'
import './Productlist.css'


export default function Header(props) {
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'50px auto 50px',gridTemplateRows:'50px'}}>
        <div className="App" style={{zIndex:'999',position:'fixed',backgroundColor:'grey' ,width: '100%',height:'50px',display:'flex' ,alignContent:'flex-wrap',justifyContent:'space-between'}}>
            <img onClick={()=>{props.pagechange(1)}} src={home} alt="" className='image' />
            <img onClick={()=>{props.pagechange(2)}} src={cart} alt="" className='image' />

        </div>
    </div>
  )
}
