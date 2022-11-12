import { ArchiveBoxIcon, BellAlertIcon, InboxArrowDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import BoxHeader from '../../components/messages/BoxHeader'
import ContactItem from '../../components/messages/ContactItem'
import MsgInputBox from '../../components/messages/MsgInputBox'
import SharedPageNav from '../../components/SharedPageNav'

type Props = {}

const sharednavLinks = [
  {title:'Inbox', icon: <InboxArrowDownIcon  className='h-5 w-5'/>},
  {title:'Archive', icon: <ArchiveBoxIcon className='h-5 w-5'/>},
  {title:'Notifications', icon: <BellAlertIcon className='h-5 w-5'/>},
]

const messages = (props: Props) => {
  return (
    <section className='px-2 lg:px-32 pt-16 h-screen w-full bg-gray-200'>
      <SharedPageNav sharednavLinks={sharednavLinks}/>

      <div className='w-full h-[90vh] bg-white rounded-lg overflow-hidden border shadow md:grid md:grid-cols-3'>
             <div className='col-span-1 relative pt-20 overflow-hidden h-full border-r-2'>
                 <div className=' flex items-center pl-6 pr-2 absolute bg-gray-100 top-0 right-0 left-0 h-20 border-b-2'>
                    <MagnifyingGlassIcon className='w-6 h-6 -mr-8 z-10 text-primary'/>    
                    <input type="text"  placeholder='Type names for quick find'
                          className='bg-white w-full h-10 rounded-lg pl-10'
                    />
                 </div>
                 <div className='overflow-scroll h-full'>
                   {/* here we should render the list of recent chats */}
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>
                    <ContactItem/>

                    {/* When there are no messages yet means has never talked to someone, we render this message  */}
                    {/* <p className='text-primary text-xl ml-24 mt-72'>No Chats yet !</p> */}
                 </div>
            </div>
            <div className='h-full overflow-hidden shadow-md md:col-span-2 flex flex-col items-stretch justify-between'>
                  <BoxHeader />
                  <div className='w-full flex-1 overflow-scroll'>
                          {/* messages */}
                  </div>
                  <MsgInputBox/>
            </div>
      </div>
    </section>
  )
}
export default messages