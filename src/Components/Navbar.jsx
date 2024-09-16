import React, { useState } from 'react';
import NebulaNet from '../assets/nebulanetlogo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='bg-whit'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>NebulaNet</span>
              <img className='h-8 w-auto' src={NebulaNet} alt='NebulaNet Logo' />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-violet'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Home</a>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>About Us</a>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Projects</a>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Careers</a>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Contact Us</a>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Technical Support</a>
            <a href='tel:8123573669' className='text-sm font-semibold leading-6 text-violet'>Call Us: 812-357-3669</a>
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <a href='#' className='text-sm font-semibold leading-6 text-violet'>Log in <span aria-hidden='true'>&rarr;</span></a>
          </div>
        </nav>
        {menuOpen && (
          <div className='lg:hidden' role='dialog' aria-modal='true'>
            <div className='fixed inset-0 z-50 bg-gray-900/50' onClick={() => setMenuOpen(false)}></div>
            <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-whit px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>NebulaNet</span>
                  <img className='h-8 w-auto' src={NebulaNet} alt='NebulaNet Logo' />
                </a>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-violet'
                  onClick={() => setMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                    <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Home</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>About Us</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Projects</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Careers</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Contact Us</a>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Technical Support</a>
                    <a href='tel:8123573669' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Call Us: 812-357-3669</a>
                  </div>
                  <div className='py-6'>
                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80' aria-hidden='true'>
          <div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
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
    </div>
  );
};

export default Navbar;
