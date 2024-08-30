import React from 'react'
import {createContext,useState,useEffect } from 'react'
import UseContact from './components/UseContact'
export let Global= createContext()

export default function App() {
  let [Show,setShow]=useState([])

  let [Display,setDisplay]=useState([])

  let [Gap,setGap]=useState(6)

  useEffect(()=>{
    async function getdata(){
      let datashow = await fetch(" https://jsonplaceholder.typicode.com/posts")
      datashow = await datashow.json()
      console.log(datashow)

      setShow(datashow)
    }
    getdata()
  },[])
  useEffect(()=>{
    let filterdata = Show.filter(item =>item.id <= Gap)
    setDisplay(filterdata)
  },[Gap,Show])
  return (
    <div>
      <Global.Provider value={{Display,setGap,Gap,setDisplay}}>
        <UseContact/>


      </Global.Provider>

    </div>
  )
}
