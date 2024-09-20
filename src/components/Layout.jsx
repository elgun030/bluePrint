import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import { useNavigate } from 'react-router'
// import Footer  from './Footer'


const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const userId = localStorage.getItem('userId')
if (!userId) {
    navigate('/sign-in')
  } 
        
    })
  return (
    <div>
<Header/>
      <Outlet />
{/* <Footer/> */}
    </div>
  )
}

export default Layout