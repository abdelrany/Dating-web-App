import { UserGroupIcon, StarIcon, HandThumbUpIcon, EyeSlashIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import SharedPageNav from '../SharedPageNav'


const sharednavLinks = [
  {title:'My matches', icon: <HeartIcon className='h-5 w-5'/>},
  {title:'Favorites', icon: <StarIcon className='h-5 w-5'/>},
  {title:'Visitors', icon: <UserGroupIcon className='h-5 w-5'/>},
  {title:'Likes', icon: <HandThumbUpIcon className='h-5 w-5'/>},
  {title:'Hidden matches', icon: <EyeSlashIcon className='h-5 w-5'/>},
]

const LoggedinHome = (props: Props) => {
  return (
    <section className=''>
      <SharedPageNav sharednavLinks={sharednavLinks}/>
    </section>
  )
}

export default LoggedinHome