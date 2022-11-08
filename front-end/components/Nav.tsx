import Image from 'next/image';
import profileImg from '../assets/images/profile.png'
import {ChevronDownIcon} from '@heroicons/react/24/outline'

const Nav = () => {
  const isLoggedIn = false;

    if (isLoggedIn) {
      return <header>
          <nav className='bg-white flex justify-between items-center h-12  px-2 sm:px-8 lg:px-32'>
              {/* logo to be added later as an SVG or PNG */}
              <h1 className="font-extrabold text-2xl text-primary mr-4">DatingApp</h1>
              <ul className="flex items-center flex-1 gap-4 ml-8 text-dark">
                <li className="cursor-pointer hover:text-primary hover:translate-y-[-4px] transition-all duration-300">Matches</li>
                <li className="cursor-pointer hover:text-primary hover:translate-y-[-4px] transition-all duration-300">Dates</li>
                <li className="cursor-pointer hover:text-primary hover:translate-y-[-4px] transition-all duration-300">Messages</li>
                <li className="cursor-pointer hover:text-primary hover:translate-y-[-4px] transition-all duration-300">Discovery</li> 
              </ul>
              <div className="flex items-center gap-2">
                <Image src={profileImg} className="w-10 h-10 rounded-full" alt="profile name"/>
                <p className="cursor-pointer text-dark">Kouhadi Bryan</p>
                <ChevronDownIcon className="cursor-pointer h-6 w-6 text-primary"/>
              </div>
          </nav>
        </header>
    }
  if(!isLoggedIn) return <header className='bg-dark '>
                            <nav className='flex justify-between items-center h-12 px-2 sm:px-8 lg:px-32'>
                              {/* logo to be added later as an SVG or PNG */}
                              <h1 className="font-extrabold text-2xl text-primary md:mr-4">DatingApp</h1>
                              <div className='flex items-center gap-1 md:gap-2'>
                                <p className='text-gray-200 text-sm'>Already a member ? </p>
                                <button className='btn-accent text-sm tracking-widest'>Login</button>
                              </div>
                            </nav>
                         </header>
}
export default Nav;