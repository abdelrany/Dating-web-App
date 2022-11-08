import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react'

type Props = {}

const Form = (props: Props) => {
  return (
    <form className='rounded-md p-4 bg-gray-100 w-[350px] shadow-md flex flex-col gap-4 justify-center'>
       <div className='flex justify-between items-center'>
            <div className='flex-[.47]'>
                <h2 className='font-bold text-gray-600 mb-4'>I am a :</h2>
                <div className='group mb-2 hover:bg-accent border  border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-1" id="radio-man" className='bg-primary h-6 w-6 cursor-pointer' />
                    <label htmlFor="radio-man" className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Man</label>
                </div>
                <div className='group hover:bg-accent border border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-1" id="radio-woman" className='bg-primary h-6 w-6 cursor-pointer' />
                    <label htmlFor="radio-woman" className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Woman</label>
                </div>
            </div>
            <div className='flex-[.47]'>
                <h2 className='font-bold text-gray-600 mb-4'>I am looking for a :</h2>
                <div className='group mb-2 hover:bg-accent border border-accent flex items-center justify-around rounded-lg  gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-2" id="radio-man-2" className='bg-primary h-6 w-6 cursor-pointer' />
                    <label htmlFor="radio-man-2" className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Man</label>
                </div>
                <div className='group hover:bg-accent border border-accent flex items-center justify-around rounded-lg gap-4 p-2 w-full'>
                    <input  type="radio" value="" name="gender-2" id="radio-woman-2" className='bg-primary h-6 w-6 cursor-pointer' />
                    <label htmlFor="radio-woman-2" className='group-hover:text-gray-100 cursor-pointer text-gray-600'>Woman</label>
                </div>
            </div>
       </div> 
       <label className='border border-accent rounded-md relative gap-2'>
            <UserIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="text"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="First and Last Names"/>
       </label>
       <label className='border border-accent rounded-md relative gap-2'>
            <EnvelopeIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="text"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="First and Last Names"/>
       </label>
       <label className='border border-accent rounded-md relative gap-2'>
            <UserIcon className='h-6 w-6 text-accent absolute top-2 left-2'/>
            <input type="password"  className='bg-transparent  w-full h-full pl-10 p-2 rounded-md placeholder:italic placeholder:text-slate-400 ' placeholder="Password"/>
       </label>
        <button className='btn-primary w-full hover:translate-y-[-2px] duration-300'>Register Now for Free</button>
        <button className='btn-secondary w-full hover:translate-y-[-2px] duration-300'>Sign in With Facebook</button>

    </form>
  )
}
export default Form;