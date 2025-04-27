import React from 'react'
import Header from './componets/Header'
import Navbar from './componets/navbar'
import Mobilenavbar from './componets/Mobilenavbar'



export default function App() {
  return (
    <div className='bg-gray-100'>
      <div className='flex flex-col p-5 gap-5 bg-gray-100'>
      <Header/>
      <Mobilenavbar />
      </div>
    </div>
    
  )
}
