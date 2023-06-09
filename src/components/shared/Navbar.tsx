'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import scrollToElement from 'scroll-to-element';
import Logo from '../../../public/assets/images/logo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (selector: any) => {
    scrollToElement(selector, { offset: 0, ease: 'linear', duration: 500 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      className={`${
        windowHeight ? 'fixed top-0' : 'absolute top-0 lg:top-10'
      }  w-full z-50`}
    >
      <nav
        className={`bg-main-dark px-4 ${
          windowHeight ? 'py-4 md:py-3' : 'py-2 md:py-6'
        } sm:px-6 md:px-12 ${
          !windowHeight && 'lg:rounded-full max-w-[1200px] w-full'
        } mx-auto shadow-2xl`}
      >
        <div className=" flex flex-wrap justify-between items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="KVPainting"
              height={60}
              width={60}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex md:order-2">
            <button
              onClick={toggleMenu}
              data-collapse-toggle="NavBarId"
              type="button"
              className="inline-flex items-center p-2 text-base md:text-xl text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full lg:block md:w-auto" id="NavBarId">
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 text-base md:text-xl  md:font-medium text-main-white">
              {/* about */}
              <li
                onClick={() => scrollTo('#aboutsection')}
                className="hover:text-orange"
              >
                <a
                  href="#aboutsection"
                  className="block py-2 pl-3 "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              {/* services */}
              <li
                onClick={() => scrollTo('#servicessection')}
                className="hover:text-orange"
              >
                <a href="#servicessection" className="block py-2 pl-3 ">
                  Services
                </a>
              </li>
              {/* what we do  */}
              <li
                onClick={() => scrollTo('#whatwedosection')}
                className="hover:text-orange"
              >
                <a href="#whatwedosection" className="block py-2 pl-3 ">
                  What we do
                </a>
              </li>
              {/* companies */}
              <li
                onClick={() => scrollTo('#companiessection')}
                className="hover:text-orange"
              >
                <a href="#companiessection" className="block py-2 pl-3 ">
                  Companies
                </a>
              </li>
              {/* projects */}
              <li
                onClick={() => scrollTo('#projectssection')}
                className="hover:text-orange"
              >
                <a href="#projectssection" className="block py-2 pl-3 ">
                  Projecs
                </a>
              </li>
              {/* contact */}
              <li
                onClick={() => scrollTo('#contactsection')}
                className="hover:text-orange"
              >
                <a href="#contactsection" className="block py-2 pl-3 ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile */}
        <div className="w-full md:w-auto block lg:hidden">
          <ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white`}
          >
            {/* about */}
            <li
              onClick={() => {
                scrollTo('#aboutsection');
                setIsOpen(false);
              }}
            >
              <a
                href="#aboutsection"
                className="block py-2 pl-3 "
                aria-current="page"
              >
                About
              </a>
            </li>
            {/* services */}
            <li
              onClick={() => {
                scrollTo('#servicesssection');
                setIsOpen(false);
              }}
            >
              <a href="#servicessection" className="block py-2 pl-3 ">
                Services
              </a>
            </li>
            {/* what we do  */}
            <li
              onClick={() => {
                scrollTo('#whatwedosection');
                setIsOpen(false);
              }}
            >
              <a href="#whatwedosection" className="block py-2 pl-3 ">
                What we do
              </a>
            </li>
            {/* companies */}
            <li
              onClick={() => {
                scrollTo('#companiessection');
                setIsOpen(false);
              }}
            >
              <a href="#companiessection" className="block py-2 pl-3 ">
                Companies
              </a>
            </li>
            {/* projects */}
            <li
              onClick={() => {
                scrollTo('#projectssection');
                setIsOpen(false);
              }}
            >
              <a href="#projectssection" className="block py-2 pl-3 ">
                Projects
              </a>
            </li>
            {/* contact */}
            <li
              onClick={() => {
                scrollTo('#contactsection');
                setIsOpen(false);
              }}
            >
              <a href="#contactsection" className="block py-2 pl-3 ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
