import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("Olive")

  return (
    
      <div className='w-full h-screen duration-200' style={{backgroundColor: color }}>

        <div className='flex fixed justify-center gap-3 bg-amber-50 w-400  h-20 mt-190 rounded-3xl ml-45 '>
          <button className=' bg-red-700 m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("red")}}>Red</button>
          <button className=' bg-[#D69ADE] m-3 w-70 rounded-3xl p-3'  onClick={()=>{setColor("#D69ADE")}}>Lavender</button>
          <button className=' bg-[#D91656] m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("#D91656")}}>Pink</button>
          <button className=' bg-[#3D8D7A] m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("#3D8D7A")}}>Green</button>
          <button className=' bg-[#FFD95F] m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("#FFD95F")}}>Yellow</button>
          <button className=' bg-[#3674B5] m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("#3674B5")}}>Blue</button>
          <button className=' bg-[#A94A4A] m-3 w-70 rounded-3xl p-3' onClick={()=>{setColor("#A94A4A")}}>Brown</button>
          

        </div>



     
      </div>
      
     
    
  )
}

export default App
