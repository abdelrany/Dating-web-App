import React from 'react'
import "../styles/globals.css"

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='min-h-screen my-0 mx-auto max-w-[1200px] pt-24'>
      {/* each page will a different nav besides the main nav */}
      <div className="absolute top-16 left-0 w-screen text-dark bg-gradient">
        <ul className='flex items-center gap-16  max-w-[1200px] my-0 mx-auto h-16'>
            <li className="">My Matches</li>
            <li className="">Favorites</li>
            <li className="">Visitors</li>
            <li className="">Likes</li>
            <li className="">Hidden Matches</li>
        </ul>
      </div>

        Home page
    </div>  
  )
}
export default HomePage;