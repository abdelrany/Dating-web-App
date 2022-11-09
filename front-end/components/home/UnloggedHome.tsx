import Image from 'next/image'
import React from 'react'
import Form from './Form'
import homeImg from '../../assets/images/home.jpeg'
import privacyImg from '../../assets/images/privacy.png'
import secureImg from '../../assets/images/securee.png'
import datenewsLogo from '../../assets/images/datingnews.png'
import dateadviceLogo from '../../assets/images/datingadvice.png'

import {ChatBubbleOvalLeftIcon, HeartIcon, UserPlusIcon } from '@heroicons/react/24/outline'
import Features from './Features'
import DateAdviceSection from './DateAdviceSection'

type Props = {}

const UnloggedHome = (props: Props) => {
  return (
    <section className=''>
       <Image src={homeImg} alt="dating app home page" className="absolute top-0 left-0 w-screen h-screen z-[-1]" />
       <div className='py-8  px-2 sm:px-8 lg:px-32 mb-12 min-h-[75vh] '>
           <h1 className='font-extrabold text-4xl text-center text-gray-100 w-[350px] mb-4'>Find Real Love in Real Time at a Click</h1>
           <Form/>
           <div className='hidden absolute bottom-44 right-32 lg:flex items-center rounded-md bg-gray-100 w-90 h-16'>
               <Image src={privacyImg} alt="privacy" className='h-full w-32'/>
               <Image src={secureImg} alt="privacy" className='h-full w-44'/>
           </div>
       </div>
        <div className='h-28 bg-white flex items-center justify-around gap-2 px-2 sm:px-8 lg:px-32 '>
                <div className='flex flex-col justify-center items-center -translate-y-10 gap-4'>
                    <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary group hover:bg-gray-100 duration-300'>
                        <UserPlusIcon className='h-6 w-6 text-gray-100 group-hover:text-primary'/> 
                    </div>
                    <h1 className='text-center text-sm lg:font-extrabold text-dark'>Sign Up and Get Started</h1>
                </div>
                <div className='flex flex-col justify-center items-center  -translate-y-10 gap-4'>
                    <div className='flex justify-center items-center w-12 h-12 rounded-full bg-primary group hover:bg-gray-100 duration-300'>
                        <ChatBubbleOvalLeftIcon className='h-6 w-6 text-gray-100 group-hover:text-primary'/> 
                    </div>
                    <h1 className='text-center text-sm lg:font-extrabold text-dark'>Unlock "Ready To Chat"</h1>
                </div>
                <div className='flex flex-col justify-center items-center  -translate-y-10 gap-4'>
                    <div className='group flex justify-center items-center w-12 h-12 rounded-full bg-primary hover:bg-gray-100 duration-300'>
                        <HeartIcon className='h-6 w-6 text-gray-100 group-hover:text-primary duration-300'/> 
                    </div>
                    <h1 className='text-center text-sm lg:font-extrabold text-dark'>Invite your match to date</h1>
                </div>
        </div>
        <Features/>
        <DateAdviceSection />
        <div className='bg-white py-12 px-2 sm:px-8 lg:px-32 '>
            <h1 className='text-dark text-3xl font-extrabold text-center mb-12'>Featured on </h1>
            <div className='flex justify-center gap-24 items-center'>
                <Image src={datenewsLogo} alt="Dating news" className='w-24 h-16 md:w-32 md:h-24'/>
                <Image src={dateadviceLogo} alt="dating advice" className='w-24 h-16 md:w-32 md:h-24'/>
            </div>
        </div>
    </section>
  )
}
export default UnloggedHome