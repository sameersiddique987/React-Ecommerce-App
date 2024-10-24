
import React from 'react'
import ResponsiveAppBar from './component/ResponsiveAppBar'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

    
    <ResponsiveAppBar />
   
    <Outlet />
    </>
  )
}

export default Layout