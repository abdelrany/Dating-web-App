import React from 'react'
import UnloggedHome from '../components/home/UnloggedHome'
import "../styles/globals.css"

type Props = {}
const HomePage = (props: Props) => {
  return (
    <div className='min-h-screen'>

        <UnloggedHome />
    </div>  
  )
}
export default HomePage;