import { DevicePhoneMobileIcon, PresentationChartLineIcon, HeartIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline'
import {HeartIcon as HeartIconSolid} from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import matchImg from '../../assets/images/matchingimg.png';
import signupSvg from '../../assets/svg/signup.png';
import datingSvg from '../../assets/svg/dating2.png';
import chattingSvg from '../../assets/svg/chatting.png';
import Img from '../../assets/images/profile.png' 
type Props = {}

const Features = (props: Props) => {
  return (
    <div className=' min-h-[80vh]'>
        {/* download app section */}
        <div className='bg-gradient py-2 px-2 sm:px-8 lg:px-32 lg:py-4 flex flex-col-reverse md:flex-row md:items-start justify-between items-center'>
            <div className='flex flex-col items-center '>
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
            <Image src={matchImg} alt="our app on app strore" className="w-40  h-48 -translate-y-12 -rotate-12 hover:rotate-0 duration-500" />
        </div>
        {/* features */}
        <div className=' px-2 sm:px-8 lg:px-32 bg-white py-12'>
            <h1 className='text-center font-bold text-3xl text-dark'>ClickDate: Find love with our dating site</h1>
            <article className='flex items-center justify-around flex-col md:flex-row py-8 gap-4'>
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
            </article>
        </div>

        {/* The illustration of Matchmaking  */}
        <div className='py-12 px-2 sm:px-8 lg:px-32 flex justify-between flex-col gap-4 md:flex-row items-center bg-dark'>
            <article className='flex-[.5]'>
                <h1 className='text-gray-100 text-center md:text-left text-2xl font-extrabold mb-4 tracking-wide'>
                    An Intelligent Matchmaking
                </h1>
                <p className='text-gray-100  text-center md:text-left text-sm tracking-wide'>
                    in contrast to the other matchmaking systems, we combined modern approach of psychology -
                    behaviorism with artificial intelligence pricipals to make the best partners suggestions.
                </p> <br/>
                <p className='text-gray-100  text-center md:text-left text-sm tracking-wide'>
                    Our deep-learning artificial intelligence system doesn't just ask questions - it learns what
                    your true preferences are based on your behavior, likes, patterns and psyche, and shows you
                    perfect matches instantly. No long forms or endless questions, just simple and fast matches based
                    on your clicks.
                </p>
            </article>
            <div className='flex-[.5] flex justify-between items-center gap-2'>
                    <div className=''>
                        <div className="loader-cirle loader-cirle-one group flex justify-center items-center">
                            <CursorArrowRaysIcon className='h-6 w-6 md:h-8 md:w-8 -rotate-45 text-gray-200 group-hover:animate-pulse group-hover:scale-150 duration-300'/>
                        </div>
                        <h1 className='text-center text-gray-100 mt-4 tracking-wide'>You Click</h1> 
                    </div>

                    <div className=''>
                        <div className="loader-cirle loader-cirle-two group flex justify-center items-center">
                            <PresentationChartLineIcon className='h-8 w-8 text-gray-200 group-hover:animate-pulse group-hover:scale-150 duration-300'/>
                        </div>
                        <h1 className='text-center text-gray-100 mt-4 tracking-wide'>We Analyze</h1> 
                    </div>

                    <div className=''>
                        <div className="loader-cirle loader-cirle-three group flex justify-center items-center">
                            <HeartIcon className='h-8 w-8 text-gray-200 group-hover:animate-pulse group-hover:scale-150 duration-300'/>
                        </div>
                        <h1 className='text-center text-gray-100 mt-4 tracking-wide'> Best Match</h1> 
                    </div>
            </div>
        </div>

        {/* the last part of the fetaures section with a gradient bg */}
        <div className='bg-gradient py-4 px-2 sm:px-8 lg:px-32 flex flex-col md:flex-row items-center justify-between '>
            <article className='lg:flex-[.8]'>
                <h1 className='text-gray-100 text-center md:text-left text-2xl font-extrabold mb-4 tracking-wide'>Don't Wait, Start Rigt Now</h1>
                <p className='text-gray-100  text-center md:text-left'>
                    What are you waiting for ? With clickdate, Ther's no reason why you shouldn't find your perfect match, we are an
                    honest, realistic dating site, and we want you to find true love. Meet other single and meet the take step towards
                    changing your status from "Single" to "Token" when you register with clickdate.
                </p>
            </article>
            <div className='flex justify-center items-center relative'>
                <div className='w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Image src={Img} alt="" className='w-32 h-32 rounded-full'/>
                </div>
                <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-primary p-4 rounded-full'>
                    <div className='p-2 rounded bg-white' >
                        <HeartIconSolid className='h-6 w-6 text-primary animate-pulse'/>
                    </div>
                </div>
                <div className='w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center'>
                    <Image src={Img} alt="" className='w-32 h-32 rounded-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Features