import { FaceSmileIcon, FireIcon, PaperClipIcon } from '@heroicons/react/24/outline'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const MsgInputBox = (props: Props) => {
  return (
        <form className='w-full h-32 p-2 relative'>
            <textarea className='border-2 pb-12 max-h-28 border-accent bg-white px-4 py-2 w-full h-full rounded-lg resize-none'  placeholder='Type your message here'/>
            
            <div className='absolute bottom-1 left-2 right-2 px-4 pb-4 w-[100%] h-8 flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
                    <FaceSmileIcon className='cursor-pointer h-6 w-6 text-dark duration-300'/>
                    <PaperClipIcon className='-rotate-45 cursor-pointer h-6 w-6 text-dark duration-300'/>
                    <FireIcon className='cursor-pointer h-6 w-6 text-dark duration-300'/>
              </div>

              <PaperAirplaneIcon className='text-secondary cursor-pointer h-8 w-8 duration-300 mr-4 mb-2'/>
            </div>

        </form>
  )
}

export default MsgInputBox