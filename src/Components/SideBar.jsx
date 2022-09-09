import React from 'react'
import { NavbarOptions } from '../DataFiles/NavbarOptions'

const SideBar = () => {
  return (
    <div>
    <h1 className='headline'><span>Dev</span>challenges.io</h1>
      <ul>
      {
        NavbarOptions.map(({id, name})=>{
          return(
            <li  key={id}>{name}</li>
          )
        })
      }
      </ul>
    </div>
  )
}

export default SideBar