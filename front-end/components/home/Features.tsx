import { DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import matchImg from '../../assets/images/matchingimg.png';
import signupSvg from '../../assets/svg/signup.png';
import datingSvg from '../../assets/svg/dating2.png';
import chattingSvg from '../../assets/svg/chatting.png';

type Props = {}

const Features = (props: Props) => {
  return (
    <div className=' min-h-[80vh]'>
        {/* download app section */}
        <div className='bg-gradient py-2 px-2 sm:px-8 lg:px-32 lg:py-4 flex flex-col-reverse md:flex-row md:items-start justify-between items-center gap-24'>
            <div className='flex flex-col items-center -translate-y-16 md:translate-y-0'>
                <h1 className='mb-2 text-2xl font-extrabold text-gray-100 tracking-widest text-center '>Get ClickDate on Your Phone</h1>
                <p className='mb-2 text-gray-100 tracking-normal text-center'>Interact with partners whenever you want from yur mobile phone.</p>
                <p className=' mb-2 text-gray-100 tracking-normal text-center'>The more you use the app, the more you are close to a real date.</p>
                <div className='hover:-translate-y-2 group cursor-pointer duration-300 w-52 flex items-center  justify-between p-2 px-4 bg-black rounded-lg text-gray-100'>
                    <DevicePhoneMobileIcon className='animate-pulse h-full w-10'/>
                    <span className=''>
                        <p className='text-sm'>Download on The</p>
                        <h1 className='text-md font-bold'>App Store</h1>
                    </span>
                </div>
            </div>
            <Image src={matchImg} alt="our app on app strore" className="w-40  h-48 -translate-y-16 -rotate-12 hover:rotate-0 duration-500" />
        </div>
        {/* features */}
        <div className=' px-2 sm:px-8 lg:px-32 bg-white py-12'>
            <h1 className='text-center font-bold text-3xl text-dark'>ClickDate: Find love with our dating site</h1>

            <div className='flex items-center justify-around flex-col md:flex-row py-8 gap-4'>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={signupSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Sign up and Get Started</h1>
                    <p className='text-sm text-center'>Now with instantly generated matches based  on your behavior, likes, patterns, psyche.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={chattingSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Unlock "Ready to Chat" </h1>
                    <p className='text-sm text-center'>Unlock "Ready to Chat" status with partner  and chat without any limits.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={datingSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Invite your match to date</h1>
                    <p className='text-sm text-center'> Afer certain relationsis built up, you're "ready to date"  and can invite your match to date right from the app</p>
                </div>
            </div>
        </div>

    </div>
  )
}
export default Features