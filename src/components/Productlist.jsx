import React from 'react'
import {useState} from 'react'
import './Productlist.css' 


export default function Productlist(props) {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


    
  
  return (

    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{margin:'35px 15px',justify_items: 'center',borderRadius:'20px',display:'inline-block',position:'relative'}}>
      
      
  
    <img src={props.items.image} alt=""  style={{borderRadius:'20px',height:'150px',width:'150px'}}/>
      {isHovering && (
          <div className='pop_up' style={{position:'absolute' ,text_align: 'center',width:'150px'}}>
            <p style={{marginLeft:'10px' ,fontSize:'20px' ,color:'white'}}>{props.items.name}</p>
            <p className='p' style={{marginLeft:'10px' ,display:'inline-block',marginTop:'0' }}>price {props.items.price}</p>
            <button className='button' onClick={()=>{props.additem(props.items.name,props.items.price)}} style={{marginLeft:'40px'}}>+</button>
          </div>
          )}
    
  

      
      
        
    </div>

  )
}
