import * as React from 'react';

import CloudinaryImg from './images/CloudinaryImg';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      <CloudinaryImg
        className='float-right ml-6 w-40 md:w-72'
        publicId='gardenka'
        width='350'
        height='200'
        alt='Gardenka'
        preview={false}
      />
      <CloudinaryImg
        className='float-right ml-6 w-40 md:w-72'
        publicId='nike'
        width='250'
        height='100'
        alt='nike'
        preview={false}
      />
    </div>
  );
}
