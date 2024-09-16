import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NebulaNet from '../assets/nebulanetlogo.png';


const Navbar = () => {
    // const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(" ");





  return (

      <div className={`${hidden} bg-whit`} >
        <header className='absolute inset-x-0 top-0 z-50'>
          <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
            <div className='flex lg:flex-1'>
              <Link to="/" className='-m-1.5 p-1.5'>
                <span className='sr-only'>NebulaNet</span>
                {/* <img className='h-8 w-auto' src={NebulaNet} alt='NebulaNet Logo' /> */}
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet via-lightviolet to-darkviolet bg-clip-text text-transparent animate-text-wave">
  NebulaNet
</h1>
              </Link>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-violet'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className='sr-only'>Open main menu</span>
                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              <Link to="/" className='text-sm font-semibold leading-6 text-violet'>Home</Link>
              <Link to="/about-us" className='text-sm font-semibold leading-6 text-violet'>About Us</Link>
              <Link to="/projects" className='text-sm font-semibold leading-6 text-violet'>Projects</Link>
              <Link to="/careers" className='text-sm font-semibold leading-6 text-violet'>Careers</Link>
              <Link to="/contact-us" className='text-sm font-semibold leading-6 text-violet'>Contact Us</Link>
              <Link to="/support" className='text-sm font-semibold leading-6 text-violet'>Technical Support</Link>
              <a href='tel:8123573669' className='text-sm font-semibold leading-6 text-violet'>Call Us: 812-357-3669</a>
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <Link to="/login" className='text-sm font-semibold leading-6 text-violet'>Log in <span aria-hidden='true'>&rarr;</span></Link>
            </div>
          </nav>
          {menuOpen && (
            <div className='lg:hidden' role='dialog' aria-modal='true'>
              <div className='fixed inset-0 z-50 bg-gray-900/50' onClick={() => setMenuOpen(false)}></div>
              <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-whit px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                <div className='flex items-center justify-between'>
                  <Link to="/" className='-m-1.5 p-1.5'>
                    <span className='sr-only'>NebulaNet</span>
                    <img className='h-8 w-auto' src={NebulaNet} alt='NebulaNet Logo' />
                  </Link>
                  <button
                    type='button'
                    className='-m-2.5 rounded-md p-2.5 text-violet'
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>
                <div className='mt-6 flow-root'>
                  <div className='-my-6 divide-y divide-gray-500/10'>
                    <div className='space-y-2 py-6'>
                      <Link to="/" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Home</Link>
                      <Link to="/about-us" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>About Us</Link>
                      <Link to="/projects" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Projects</Link>
                      <Link to="/careers" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Careers</Link>
                      <Link to="/contact-us" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Contact Us</Link>
                      <Link to="/support" className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Technical Support</Link>
                      <a href='tel:8123573669' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Call Us: 812-357-3669</a>
                    </div>
                    <div className='py-6'>
                      <Link to="/login" className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-violet hover:bg-gray-50'>Log in</Link>
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

          {/* IN this section you can dynamically render other pages */}
        
        </div>
      </div>

     

  );
};

export default Navbar;
