import Computer from './computer.jpg'
import carrot from './carrot.jpeg'
import cat from './cat.jpeg'
import cheese from './cheese.jpeg'
import chocolateMilk from './chocolateMilk.jpeg'
import cola from './cola.jpeg'
import eggs from './eggs.jpeg'
import goldMilk from './goldMilk.jpeg'
import honey from './honey.jpeg'
import iceCream from './iceCream.jpeg'
import iphone from './iphone.jpeg'
import lemon from './lemon.jpeg'
import lettece from './lettece.jpeg'
import maple from './maple.jpeg'
import milk from './milk.jpeg'
import oreo from './oreo.jpeg'
import salt from './salt.jpeg'
import toilet_paper from './toilet_paper.jpeg'
import candy from './candy.jpg'
import toilet from './toilet.jpg'
import Header from './components/Header';
import Buy from './components/Buy';
import Products from './components/Products';
import './App.css';
import { useState } from 'react';


function App() {
  let items= [{name:'computer',price:50,image:Computer},{name:'carrot',price:3,image:carrot},{name:'cat',price:800,image:cat},{name:'cheese',price:20,image:cheese},{name:'chocolateMilk',price:10,image:chocolateMilk},{name:'cocaCola',price:5,image:cola},{name:'eggs',price:15,image:eggs},{name:'honey',price:20,image:honey},{name:'ice Cream',price:15,image:iceCream},{name:'iphone23',price:500,image:iphone},{name:'lemon',price:4,image:lemon},{name:'lettece',price:7,image:lettece},{name:'maple',price:15,image:maple},{name:'milk',price:10,image:milk},{name:'oreo',price:15,image:oreo},{name:'salt',price:1,image:salt},{name:'candy',price:5,image:candy},{name:'goldMilk',price:5000,image:goldMilk},{name:'toilet_paper',price:5000,image:toilet_paper},{name:'toilet',price:5000,image:toilet}]
  const [additem,setAdd]=useState([])
  const [buylist,setBuy]=useState()
  const addarr = (i,p)=>{
    let arr = {name:i,price:p}
    setAdd([...additem,arr])
    
  }


  const [pagechange,setChange]= useState(1)
  const pageData = ()=>{
    if (pagechange === 1) {
      return <Products items={items} buyitem={addarr}/>
    }else if (pagechange === 2) {
      return <Buy pagechange={setChange} buylist={additem} items={setAdd} buy={setBuy}/>
    }
    
  }
  



  return (
  
    <div >
      <Header pagechange={setChange} items={items} addarr={addarr}/>
      {pageData()}
      {console.log(buylist)}
      
      
    </div>
  );
}

export default App;
