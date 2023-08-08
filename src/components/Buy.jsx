import React from 'react'
import Buylist from './Buylist'




export default function Buy(props) {
  let arr = []

props.buylist.forEach((val)=>{
  if (arr.length<=0) {
    arr.push({name:val.name,price:val.price,times:1})
  }
  else {
    let find = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === val.name) {
        arr[i].times++
        find=true
      }
    }
    if (find === false) {
      arr.push({name:val.name,price:val.price,times:1})
    
        
    }
    

  }
})
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].times

    
  }
  
  return (
    <div >

        <h1 >cart</h1>
        

      
        
          {arr.map((val,ind)=>{
              return  <Buylist itemPrice={val.price} itemName={val.name} times={val.times} key={ind}/>
          })}
        
        <h1 style={{display:'inline-block'}}>total = {sum}</h1>
        <button onClick={()=>{props.pagechange(1);props.items([]);arr.push({total:sum});props.buy(arr)}}>buy</button>


    </div>
  )
}
