import Image from 'next/image';
import profileImg from '../assets/images/profile.png'

const Nav = () => {
  return (
    <header>
      <nav className='bg-white flex justify-between items-center h-16 max-w-[1200px] my-0 mx-auto'>
          <h1 className="font-extrabold text-3xl text-primary mr-4">DatingApp</h1>
          <ul className="flex items-center flex-1 gap-4 ml-8 text-dark">
            <li className="">Matches</li>
            <li className="">Dates</li>
            <li className="">Messages</li>
            <li className="">Discovery</li> 
          </ul>
          <div className="flex items-center gap-4">
            <Image src={profileImg} className="w-12 h-12 rounded-full" alt="profile name"/>
            <p className=" text-dark">Kouhadi Bryan</p>
            {/* icon here; to be added later */}
          </div>
      </nav>
    </header>
  )
}
export default Nav;