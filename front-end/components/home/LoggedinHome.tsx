import React from 'react'

type Props = {}

const LoggedinHome = (props: Props) => {
  return (
    <section className=''>
        <div className="absolute top-12 left-0 w-screen text-dark bg-gradient  px-2 sm:px-8 lg:px-32">
            <ul className='flex items-center gap-16 text-gray-200 h-12'>
                <li className="">My Matches</li>
                <li className="">Favorites</li>
                <li className="">Visitors</li>
                <li className="">Likes</li>
                <li className="">Hidden Matches</li>
            </ul>
            
       </div>

    </section>
  )
}

export default LoggedinHome