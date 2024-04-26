import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

interface Props {
    bgColor?: String
}

const Footer = ({bgColor}: Props) => {
  return (
    <div 
        className={`
            ${bgColor}
            w-screen 
            h-6 
            py-5
            md:h-16
            text-text 
            flex 
            flex-row
            justify-center
            items-center
            opacity-70
            
            `}
        > 
                <FaRegCopyright /> <p className='ml-1'>2024 Huy Dang</p>
        </div>
  )
}

export default Footer