import React from 'react'
import Body from './Body'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <Body/>
      <Outlet/>
    </div>
  )
}

export default AppLayout
