import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="footer-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#footer-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We provide innovative solutions to help businesses thrive in the digital world. Our expertise covers a wide range of services, ensuring your online presence is impactful and engaging.
              </p>
              <div className="mt-10 flex flex-col gap-y-6 text-gray-400">
                <p><strong className="font-semibold text-white">Contact Us:</strong> vatsalrishabh00@gmail.com</p>
                <p><strong className="font-semibold text-white">Phone:</strong> +91 8123573669</p>
              </div>
            </div>
          </div> */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">Our Services</h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-400">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                  <span>
                    <strong className="font-semibold text-white">Cloud Solutions.</strong> Scalable and secure cloud services to meet your needs.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                  <span>
                    <strong className="font-semibold text-white">Security Services.</strong> Ensuring your data and systems are protected.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                  <span>
                    <strong className="font-semibold text-white">Database Management.</strong> Reliable and efficient database solutions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-white">Newsletter Signup</h3>
            <p className="mt-2 text-gray-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="mt-4 flex flex-col items-center lg:items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-xs rounded-md px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="mt-3 rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-indigo-300 hover:text-indigo-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-indigo-300 hover:text-indigo-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-indigo-300 hover:text-indigo-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
