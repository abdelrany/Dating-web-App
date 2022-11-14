import React from 'react'
import SharedPageNav from '../../components/SharedPageNav'
import { UserGroupIcon, StarIcon, HandThumbUpIcon, EyeSlashIcon, HeartIcon } from '@heroicons/react/24/outline'
import Card from '../../components/matches/Card'

const sharednavLinks = [
  {title:'My matches', icon: <HeartIcon className='h-5 w-5'/>},
  {title:'Favorites', icon: <StarIcon className='h-5 w-5'/>},
  {title:'Visitors', icon: <UserGroupIcon className='h-5 w-5'/>},
  {title:'Likes', icon: <HandThumbUpIcon className='h-5 w-5'/>},
  {title:'Hidden matches', icon: <EyeSlashIcon className='h-5 w-5'/>},
]

const Matches = () => {
  return (
    <div className='px-2 sm:px-8 lg:px-32 pt-12 min-h-screen bg-gray-100 flex flex-col items-center'>
      <SharedPageNav sharednavLinks={sharednavLinks}/>
      <main className='relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 py-8'>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </main>
      <button className='mx-auto border border-gray-300 text-secondary tracking-wide my-4 px-4 py-2 rounded-md cursor-pointer'>Load More</button>
    </div>
  )
}

export default Matches