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
        <div className='bg-gradient md:px-12 lg:px-32 py-4 flex items-start justify-around gap-24'>
            <div className=''>
                <h1 className='mb-2 text-2xl font-extrabold text-gray-100 tracking-widest'>Get ClickDate on Your Phone</h1>
                <p className='mb-2 text-gray-100 tracking-normal'>Interact with partners whenever you want from yur mobile phone.</p>
                <p className='mb-2 text-gray-100 tracking-normal'>The more you use the app, the more you are close to a real date.</p>
                <div className='hover:translate-y-[-4px] group cursor-pointer duration-300 w-52 flex items-center justify-between p-2 px-4 bg-black rounded-lg text-gray-100'>
                    <DevicePhoneMobileIcon className='animate-pulse h-full w-10'/>
                    <span className=''>
                        <p className='text-sm'>Download on The</p>
                        <h1 className='text-md font-bold'>App Store</h1>
                    </span>
                </div>
            </div>
            <Image src={matchImg} alt="our app on app strore" className="w-44  h-52 -translate-y-16 -rotate-12 hover:rotate-0 duration-500" />
        </div>
        {/* features */}
        <div className='md:px-12 lg:px-32 bg-white py-12'>
            <h1 className='text-center font-bold text-3xl text-dark'>ClickDate: Find love with our dating site</h1>

            <div className='flex items-center justify-between py-8'>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={signupSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Sign up and Get Started</h1>
                    <p className='text-sm text-center'>Now with instantly generated matches based <br/>  on your behavior, likes, patterns, psyche.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={chattingSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Unlock "Ready to Chat" </h1>
                    <p className='text-sm text-center'>Unlock "Ready to Chat" status with partner <br/>  and chat without any limits.</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={datingSvg} alt="sign up" className="w-52 h-52 hover:scale-110 duration-500"/>
                    <h1 className='text-center font-bold text-xl tracking-wide'>Invite your match to date</h1>
                    <p className='text-sm text-center'> Afer certain relationsis built up, you're "ready to date" <br/>  and can invite your match to date right from the app</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Features