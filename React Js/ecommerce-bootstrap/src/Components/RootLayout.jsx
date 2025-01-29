import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Rootlayout() {
  return (
    <div>
      <Header/>


        <Outlet/>


      {/* <Footer/> */}
    </div>
  )
}
