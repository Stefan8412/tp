import * as React from 'react';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';

export default function ProfileCard({ name, club1, club2, position }: string) {
  return (
    <div className='mx-auto my-12 w-full items-center justify-center overflow-hidden rounded-lg bg-white pb-6 shadow-sm md:max-w-sm'>
      <div className='relative h-20'>
        <CloudinaryImg
          className='absolute h-full w-full object-cover'
          publicId='ultraspresov'
          height='400'
          width='400'
          alt='bla'
        />
      </div>
      <div className='relative -my-12 mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow'>
        <CloudinaryImg
          className='h-full w-full object-cover'
          publicId='logoold'
          height='400'
          width='400'
          alt='bla'
        />
      </div>
      <div className='mt-16'>
        <h1 className='text-center text-lg font-semibold'>
          <Accent>{name}</Accent>
        </h1>
        <p className='text-center text-sm text-gray-600'>{position}</p>
      </div>
      <div className='mx-6 mt-6 flex flex-wrap border-t pt-3'>
        <div className='my-1 mr-2 cursor-default border border-indigo-600 px-2 text-xs uppercase tracking-wider text-indigo-600 hover:bg-indigo-600 hover:text-indigo-100'>
          {club1}
        </div>
      </div>
    </div>
  );
}
