import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NebulaNet from '../assets/nebulanetlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-nebula fixed top-0 inset-x-0 z-50 bg-slate-100">
      <header className="shadow-md">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          {/* Logo Section */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NebulaNet</span>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet via-lightviolet to-darkviolet bg-clip-text text-transparent animate-text-wave">
                NebulaNet
              </h1>
            </Link>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-violet"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Links for Larger Screens */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className="text-sm font-semibold leading-6 text-violet">Home</Link>
            <Link to="/aboutus" className="text-sm font-semibold leading-6 text-violet">About Us</Link>
            <Link to="/projects" className="text-sm font-semibold leading-6 text-violet">Projects</Link>
            <Link to="/career" className="text-sm font-semibold leading-6 text-violet">Careers</Link>
            <Link to="/contact-us" className="text-sm font-semibold leading-6 text-violet">Contact Us</Link>
            <Link to="/courses" className="text-sm font-semibold leading-6 text-violet">Courses</Link>
            <a href="tel:8123573669" className="text-sm font-semibold leading-6 text-violet">Call Us: 812-357-3669</a>
          </div>

          {/* Login Link */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-semibold leading-6 text-violet">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-40 bg-gray-900/50" onClick={() => setMenuOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full bg-whit px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <img className="h-8 w-auto" src={NebulaNet} alt="NebulaNet Logo" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-violet"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link to="/" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Home
                    </Link>
                    <Link to="/about-us" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      About Us
                    </Link>
                    <Link to="/projects" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Projects
                    </Link>
                    <Link to="/careers" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Careers
                    </Link>
                    <Link to="/contact-us" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Contact Us
                    </Link>
                    <Link to="/courses" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Courses
                    </Link>
                    <a href="tel:8123573669" className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Call Us: 812-357-3669
                    </a>
                  </div>
                  <div className="py-6">
                    <Link to="/login" className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-violet hover:bg-gray-50">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
