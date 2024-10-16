import { Link } from "react-router-dom";
export default function NotFound() {
    return (
      <main className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://wallpapers.com/images/featured/nebula-lt47o5qub95qmqkx.jpg")' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center text-white">
            <p className="text-base font-semibold text-indigo-300">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="./"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              {/* <Link to="./" className="text-sm font-semibold text-indigo-300">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
  