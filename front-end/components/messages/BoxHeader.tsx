import Image from 'next/image'
import React from 'react'
import imgProfile from '../../assets/images/profile.png'
import { ArchiveBoxIcon, EnvelopeIcon, FlagIcon,  } from '@heroicons/react/24/outline'

type Props = {}

const BoxHeader = (props: Props) => {
  return (
   <div className='h-20 bg-gray-100 border-b-2 w-full flex items-center justify-between px-4 '>
       <div className='flex items-center gap-4'>
          <Image src={imgProfile} alt="clickdate user" className='rounded-full w-12 h-12'/>
          <h1 className='font-extrabold text-md tracking-wide'>Xavier Hernandez</h1>
       </div>

       <div className='flex gap-4 items-center'>
            <EnvelopeIcon className='cursor-pointer h-5 w-5 text-dark duration-300'/>
            <FlagIcon className='cursor-pointer h-5 w-5 text-dark duration-300'/>
            <ArchiveBoxIcon className='cursor-pointer h-5 w-5 text-dark duration-300'/>
        </div>
    </div>
  )
}

export default BoxHeader