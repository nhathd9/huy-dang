import React from 'react'
import { GoPlusCircle } from 'react-icons/go'
import { IoCheckmarkCircle } from "react-icons/io5"

const Services = () => {
  return (
    <div 
    id='services'
    className='
      w-screen 
      min-h-screen 
      flex 
      flex-col 
      justify-center 
      items-center
      px-12 
      py-32 
      border-t
    '
  >
    <div className='
      w-full
      flex
      flex-col
      items-center
    '>
      <p 
        style={{
          background: 'rgb(38, 91, 237, 0.2)'
        }}
        className='w-28 py-1 mb-2 text-center border rounded-full text-royal-blue'
      >
        SERVICES
      </p>
      <h2 className='my-4 text-4xl'><strong>Elevate your brand, ignite your future</strong></h2>
      <p className='max-w-lg text-center'>Secure your seat, fasten your seatbelt, and join me on a interstellar journey to turn your brand vision into a next level reality.</p>
        <div className='w-full flex flex-row justify-center flex-wrap mt-20'>
        <a href='#contact' className='w-fit rounded-md bg-card p-10 pb-20 m-3 transition-all duration-500 ease-out hover:opacity-70'>
            <h2 className='text-3xl mb-2 text-royal-blue'>Website</h2>
            <p className='w-96 mb-4'>There are no limits to your website vision — Let&lsquo;s make it happen!</p>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Unique, modern, customized design</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Responsive, accessible development</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Animations & interactions</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Enduring, memorable user experience</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Catch up meetings and close communication</p>
            </div >
            <div className='my-2 flex flex-row items-center'>
              <GoPlusCircle className='text-xl mr-2'/>
              <p>Hosting (including domain) setup</p>
            </div>
        </a>
        <a href='#contact' className='w-fit rounded-md bg-card p-10 pb-20 m-3 transition-all duration-500 ease-out hover:opacity-70'>
            <h2 className='text-3xl mb-2 text-royal-blue'>Copywriting</h2>
            <p className='w-96 mb-4'>Turn your brand&lsquo;s story into a captivating narrative that leaves a lasting impact on your audience.</p>
            <div className='my-2 flex flex-row'>
              <IoCheckmarkCircle className='text-xl mr-2 mt-0.5' />
              <p>Email newsletters and promotions</p>
            </div>
            <div className='my-2 flex flex-row'>
              <IoCheckmarkCircle className='text-xl mr-2 mt-0.5' />
              <p>Landing Pages</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Sales Letters</p>
            </div >
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Social Media Ads</p>
            </div >
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Video Scripts</p>
            </div >
            <div className='my-2 flex flex-row'>
              <IoCheckmarkCircle className='text-xl mr-2 mt-0.5 '/>
              <p className='max-w-md'>Custom projects</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Unlimited revisions</p>
            </div >
        </a>
        <a href='#contact' className='w-fit rounded-md bg-card p-10 pb-20 m-3 transition-all duration-500 ease-out hover:opacity-70'>
            <h2 className='text-3xl mb-2 text-royal-blue'>Email Marketing</h2>
            <p className='w-96 mb-4'>Transform your email subscribers into paying customers with the power of email marketing!</p>
            <div className='my-2 flex flex-row'>
              <IoCheckmarkCircle className='text-xl mr-2 mt-0.5' />
              <p>Personalized email strategies tailored to your audience</p>
            </div>
            <div className='my-2 flex flex-row'>
              <IoCheckmarkCircle className='text-xl mr-2 mt-0.5' />
              <p>Engaging copy for email newsletters and promotions</p>
            </div>
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Unlimited revisions</p>
            </div >
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Automation & workflow setup</p>
            </div >
            <div className='my-2 flex flex-row items-center'>
              <IoCheckmarkCircle className='text-xl mr-2' />
              <p>Strategy meetings and close communication</p>
            </div >
            <div className='my-2 flex flex-row'>
              <GoPlusCircle className='text-xl mr-2 mt-0.5 '/>
              <p className='max-w-md'>Email marketing platform setup (including domain setup if needed)</p>
            </div>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Services