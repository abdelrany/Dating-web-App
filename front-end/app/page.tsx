import React from 'react'
import LoggedinHome from '../components/home/LoggedinHome'
import UnloggedHome from '../components/home/UnloggedHome'
import "../styles/globals.css"

type Props = {}
const HomePage = (props: Props) => {
  const isLoggedIn = true;
  return (
    <div className='min-h-screen'>
      {
        isLoggedIn ? <LoggedinHome />
                   : <UnloggedHome />
      }

    </div>  
  )
}
export default HomePage;