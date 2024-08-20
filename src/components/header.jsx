import { Outlet, Link } from "react-router-dom";
import Footer from "./footer";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="width z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            {/* <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a> */}
            <Link to="/">
              <span className="text-black text-sm font-semibold leading-6">
                Your Portfolio
              </span>
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setOpen(!open)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              {/* <span class="sr-only">Open main menu</span> */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            <Link
              to="/projects"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </Link>
            {/* <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Company
            </a> */}
          </div>
        </nav>
        {open == true ? (
          <div className="block md:hidden z-50">
            <div className="fixed inset-y-0 right-0 z-50 w-full bg-white py-6 sm:ring-1 sm:ring-gray-900/10">
              <div className="px-6 flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flow-root px-6 bg-white py-6 shadow">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      to="/projects"
                      className="bg-white block rounded-lg  py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/contact"
                      className=" block rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          false
        )}
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
