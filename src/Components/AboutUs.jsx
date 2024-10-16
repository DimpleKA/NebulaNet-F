import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, PencilIcon, ChatBubbleLeftIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden" id="#about-us">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="about-us-pattern"
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
          <rect fill="url(#about-us-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We offer a range of services to elevate your digital presence and grow your business online. Our dedicated team is here to provide the best solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">Our Services</h2>
            <ul role="list" className="mt-8 space-y-8 text-gray-400">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Hosting.</strong> Reliable and scalable hosting solutions.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Development.</strong> Custom web development services.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Support for One Year.</strong> Comprehensive support and maintenance.
                </span>
              </li>
              <li className="flex gap-x-3">
                <PencilIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Content Writing.</strong> Engaging and SEO-friendly content.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChatBubbleLeftIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Social Media Marketing.</strong> Strategies to boost your online presence.
                </span>
              </li>
              <li className="flex gap-x-3">
                <BriefcaseIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-300" />
                <span>
                  <strong className="font-semibold text-white">Logo Design.</strong> Unique and professional logo creation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Pricing</h3>
            <div className="mt-6 space-y-6 text-gray-400">
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Basic Plan</h4>
                <p className="mt-2">$199/month</p>
                <p className="mt-4">Basic hosting and support.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Standard Plan</h4>
                <p className="mt-2">$399/month</p>
                <p className="mt-4">Includes development and content writing.</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Premium Plan</h4>
                <p className="mt-2">$599/month</p>
                <p className="mt-4">All features plus social media marketing and logo design.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Address</h3>
            <p className="mt-6 text-gray-400">123 Digital Avenue, Tech City, TX 12345</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Find Us</h3>
            <div className="mt-6">
              <iframe
                className="w-full h-60 border-0 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0027119447855!2d77.60635597507537!3d12.90754688740193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44bb07227a52240b%3A0xc487f0d4e31ec0ac!2sNebulaNet%20(Website%20Apps%20Solutions)!5e0!3m2!1sen!2sin!4v1729063683778!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
