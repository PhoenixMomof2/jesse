import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi'

// export const navData = [
//   {name: 'home', path: '/', icon: <HiHome />},
//   {name: 'about', path: '/about', icon: <HiUser />},
//   {name: 'vision', path: '/vision', icon: <HiViewColumns />},
//   {name: 'why', path: '/why', icon: <HiRectangleGroup />},
//   {name: 'services', path: '/services', icon: <HiChatBubbleBottomCenterText />},
//   {name: 'contact', path: '/contact', icon: <HiEnvelope />},
// ]

export const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-cream ">
      <h1 className="w-full text-3xl font-bold text-goldenrod">J. Raney</h1>
      <ul className="hidden md:flex">
        <li className="p-4">ABOUT</li>
        <li className="p-4">VISION</li>
        <li className="p-4">WHY</li>
        <li className="p-4">SERVICES</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-cream bg-plum ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}> 
        <h1 className="w-full text-3xl font-bold text-goldenrod m-4">J. Raney</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-cream">ABOUT</li>
          <li className="p-4 border-b border-cream">VISION</li>
          <li className="p-4 border-b border-cream">WHY</li>
          <li className="p-4 border-b border-cream">SERVICES</li>
          <li className="p-4">CONTACT</li>
        </ul>
      </div>
    </div>
  )
}
