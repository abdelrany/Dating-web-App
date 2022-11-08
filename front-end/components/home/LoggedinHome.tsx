import React from 'react'

type Props = {}

const LoggedinHome = (props: Props) => {
  return (
    <section className=''>
        <div className="absolute top-12 left-0 w-screen text-dark bg-gradient">
            <ul className='flex items-center gap-16 text-gray-200 max-w-[1200px] my-0 mx-auto h-12'>
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