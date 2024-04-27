'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from './utils/send-email';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div 
      id='contact'
      className='
        w-screen
        h-screen
        flex
        flex-col
        justify-center
        items-center
        box-content
        md:flex-row 
        border-t
        py-20
        lg:py-32
      '
    >
      <div 
        className='
          flex
          flex-col
          items-center
          md:items-end
          md:w-1/2

        '
      >
        <div className='w-10/12 max-w-2xl px-5 pb-16 md:px-10 md:pb-24 xl:px-20'>
          <p className='text-3xl md:text-4xl text-left pb-4 text-royal-blue'>Got a problem to solve?</p>
          <p className='text-sm md:text-base text-left mb-3'>Get your space suit and let&lsquo;s work together to take your business to the next level!</p>
        </div>
      </div>
      <div className='w-screen md:w-1/2 md:px-10 flex flex-row justify-center md:justify-normal xl:px-20'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 max-w-2xl'>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='mb-3 block text-base font-medium'
            >
              NAME
            </label>
            <input
              style={{color: 'var(--dark-blue)'}}
              type='text'
              className='w-full rounded-sm border border-gray-300 bg-white py-1 md:py-2 px-2 md:px-4 text-text font-medium text-card outline-none focus:border-purple-500 focus:shadow-md'
              {...register('name', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='mb-3 block text-base font-medium'
            >
              EMAIL
            </label>
            <input
              style={{color: 'var(--dark-blue)'}}
              type='email'
              className='w-full rounded-sm border bg-white py-1 md:py-2 px-2 md:px-4 text-text font-medium text-card outline-none focus:border-purple-500 focus:shadow-md'
              {...register('email', { required: true })}
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='message'
              className='mb-3 block text-base font-medium'
            >
              MESSAGE
            </label>
            <textarea
              style={{color: 'var(--dark-blue)'}}
              rows={4}
              className='w-full resize-none rounded-sm border bg-white py-1 md:py-2 px-2 md:px-4 text-text font-medium text-card outline-none focus:border-purple-500 focus:shadow-md'
              {...register('message', { required: true })}
            ></textarea>
          </div>
          <div className='w-full flex flex-row justify-between flex-wrap-reverse'>
            <Link
              className='
              email
              flex
              flex-row
              items-center
              py-1
              ml-2
              transition-all
              ease-out
              duration-1000
              lg:py-2
              2xl:py-3
              2xl:mt-3
              hover:opacity-50
              '
              href="huy@huy-dang.com"> 
                <MdEmail className='text-founder mr-2'/>
                huy@huy-dang.com
              </Link>
            <button className='
              border 
              px-5 
              rounded-sm 
              mt-2 
              transition-all 
              ease-out 
              duration-1000
              hover:opacity-50
              '
            > 
              Submit 
            </button>
          </div>
        </form>
      </div>
      
    </div>  
  );
};

export default Contact;