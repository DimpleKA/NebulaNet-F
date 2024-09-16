import React from 'react'

const HeaderSection= () => {
  return (
    <div className='Header-Section'>

<div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              Announcing our next round of funding. <a href='#' className='font-semibold text-indigo-600'><span className='absolute inset-0' aria-hidden='true'></span>Read more <span aria-hidden='true'>&rarr;</span></a>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-violet sm:text-6xl'>Data to enrich your online business</h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              NebulaNet offers world-class web development and design services to give your business a professional online presence.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a href='#' className='rounded-md bg-violet px-4 py-2 text-base font-semibold leading-7 text-whit hover:bg-darkviolet'>
                Get started
              </a>
              <a href='#' className='text-base font-semibold leading-7 text-violet'>
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderSection