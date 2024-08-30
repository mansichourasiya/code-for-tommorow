import React,{useContext} from 'react'
import {Global} from "../App"
import "./UseContact.css"

export default function UseContact() {
    let {Display,setGap,Gap,setDisplay}= useContext(Global)
    function Removecard (id){
        let Remove = Display.filter(item=>item.id!==id)
        setDisplay(Remove)
        // alert("hii")
    }
  return (
    <div>
        <h1 className='head'>ShowData</h1>
    <div className='main'>
        {
            Display.map((e,i)=>(
               <div className='content' key={i}>
                <p className='cancel' onClick={()=> Removecard(e.id)} >X</p>
                <img src='https://img.lovepik.com/photo/50075/7815.jpg_wh860.jpg'/>
                <p className='para'>{e.body}</p>
                <h4> ID:{e.id}</h4>
                <p className='title'>{e.title}</p>
                <h5> UserID:{e.userId}</h5>
               </div> 
            ))
        }
       
      
    </div>
    <div className='btn'>
     <button onClick={()=>setGap(Gap+6)}>ReadMore</button>
     <button onClick={()=>setGap(Math.max(0,Gap-6))}>Previous</button>
     </div>
     </div>
  )
}
